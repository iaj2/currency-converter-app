import React, {useState, useEffect} from 'react';
import { validInput } from './helpers'
import DropdownMenu from './dropdown-menu';
import CustomTextField from './customTextField';
import CustomButton from './customButton';
import {ReactComponent as CanadaFlagIcon} from './icons/canada-flag-icon.svg'
import {ReactComponent as UKFlagIcon} from './icons/uk-flag-icon.svg';
import { ReactComponent as RightArrowIcon } from './icons/right-arrow.svg';

function App() {
  const [exchangeData, setExchangeData] = useState(null);
  const [triggerIconFrom, setTriggerIconFrom] = useState(<CanadaFlagIcon />);
  const [selectedFrom, setSelectedFrom] = useState('CAD');
  const [triggerIconTo, setTriggerIconTo] = useState(<UKFlagIcon />);
  const [selectedTo, setSelectedTo] = useState('GBP');
  const [textFieldValue, setTextFieldValue] = useState('1.00');
  const [textFieldLabel, setTextFieldLabel] = useState('');
  const [result, setResult] = useState(null);

  const handleTextFieldInput = (e) => {
    const inputValue = e.target.value;
    setTextFieldValue(inputValue);
    if(validInput(inputValue)){
      setTextFieldLabel('')
    }
    else{
      setTextFieldLabel('Enter number greater than 0')
    }
  }

  const calculateResult = () => {
    if(!exchangeData){
      console.log("Can't calculate result because of no exchange data");
      return;
    }
    if(!validInput(textFieldValue)){
      console.log("Can't calculate result because of no valid input");
      return;
    }
    // Expand conversion container to display result
    const conversionContainer = document.querySelector("conversion-container")
    conversionContainer.style.height;

    // Set the result
    const exchangeRate = parseFloat(exchangeData[selectedFrom][selectedTo]);
    const result = (parseFloat(textFieldValue)*exchangeRate).toLocaleString('en');
    setResult(result)
  }

  useEffect(() => {
    // Function to make the API call to get exchange data
    const fetchExchangeData = async () => {
      try {
        const response = await fetch('http://localhost:5000/exchange-rates');
        console.log("Got currency exchange rate data from API.")
        const jsonData = await response.json();
        setExchangeData(jsonData);
        
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchExchangeData();
  }, []); 

  return (
  <div className='App'>
    <h1 className='app-title'>Currency Converter</h1>
    <h3 className='app-subtitle'>Check live foreign currency exchange rates</h3>
    <div className='conversion-container'>
      <DropdownMenu 
        className="from-currency" 
        triggerIcon={triggerIconFrom} 
        setTriggerIcon={setTriggerIconFrom} 
        selected={selectedFrom} 
        setSelected={setSelectedFrom}
        />
      <CustomTextField
        label={textFieldLabel}
        value={textFieldValue}
        onChange={handleTextFieldInput}
       />
      <DropdownMenu className="to-currency" 
        triggerIcon={triggerIconTo} 
        setTriggerIcon={setTriggerIconTo}
        selected={selectedTo} 
        setSelected={setSelectedTo}
        />
      <CustomButton
      className="convert-button"
      icon={<RightArrowIcon />}
      onClick = {calculateResult}
      />
      {exchangeData && result? (
        <h2>{result} {selectedTo}</h2>
      ):<h2>Sorry, something Went Wrong.</h2>}
    </div>
  </div>
  );
}


export default App;
