import React, {useState} from 'react';
import DropdownMenu from './dropdown-menu'
import {ReactComponent as CanadaFlagIcon} from './icons/canada-flag-icon.svg'
import {ReactComponent as UKFlagIcon} from './icons/uk-flag-icon.svg';

function App() {
  const [triggerIconFrom, setTriggerIconFrom] = useState(<CanadaFlagIcon />);
  const [selectedFrom, setSelectedFrom] = useState('CAD');
  const [triggerIconTo, setTriggerIconTo] = useState(<UKFlagIcon />);
  const [selectedTo, setSelectedTo] = useState('GBP');

  return (
  <div className='App'>
    <h1 className='app-title'>Currency Converter</h1>
    <h3 className='app-subtitle'>Check live foreign currency exchange rates</h3>
    <div className='conversion-container'>
      <DropdownMenu className="from-currency" triggerIcon={triggerIconFrom} setTriggerIcon={setTriggerIconFrom} 
        selectedI={selectedFrom} setSelectedI={setSelectedFrom}/>
      <DropdownMenu className="to-currency" triggerIcon={triggerIconTo} setTriggerIcon={setTriggerIconTo}
        selected={selectedTo} setSelected={setSelectedTo}/>
    </div>
  </div>
  );
}


export default App;
