import React, {useState} from 'react';
import DropdownMenu from './dropdown-menu'
import CustomTextField from './customTextField';
import {ReactComponent as CanadaFlagIcon} from './icons/canada-flag-icon.svg'
import {ReactComponent as UKFlagIcon} from './icons/uk-flag-icon.svg';

function App() {
  const [triggerIconFrom, setTriggerIconFrom] = useState(<CanadaFlagIcon />);
  const [selectedFrom, setSelectedFrom] = useState('CAD');
  const [triggerIconTo, setTriggerIconTo] = useState(<UKFlagIcon />);
  const [selectedTo, setSelectedTo] = useState('GBP');
  const [textFieldValue, setTextFieldValue] = useState('1.00');
  const [textFieldLabel, setTextFieldLabel] = useState('')

  const validInput = (inputStr) => {
    const len = inputStr.length;
    if (len < 1) return true;
    let dotCount = 0;
    for(let i = 0; i < inputStr.length; i++){
      if(inputStr[i] === '.' ) {
        dotCount++;
        if(dotCount > 1 || len < 2  ) return false
      }
      else{
        if(isNaN(parseFloat(inputStr[i]))) return false;
      }
      
    }
    return true;
  }
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
    </div>
  </div>
  );
}


export default App;
