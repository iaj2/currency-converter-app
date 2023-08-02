import React, {useState, useEffect} from 'react';
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

  useEffect(() => {
    // Function to make the API call to get exchange data
    const fetchExchangeData = async () => {
      try {
        const response = await fetch('http://localhost:5500');
        const jsonData = await response.json();
        setExchangeData(jsonData);
        
      }
      catch{
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
      />
    </div>
  </div>
  );
}


export default App;
