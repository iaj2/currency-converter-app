import React, {useState, useEffect} from 'react';
import DropdownMenu from './dropdown-menu'
import {ReactComponent as CanadaFlagIcon} from './icons/canada-flag-icon.svg'
import {ReactComponent as UKFlagIcon} from './icons/uk-flag-icon.svg';

function App() {
  const [exchangeData, setExchangeData] = useState(null);
  const [triggerIconFrom, setTriggerIconFrom] = useState(<CanadaFlagIcon />);
  const [selectedFrom, setSelectedFrom] = useState('CAD');
  const [triggerIconTo, setTriggerIconTo] = useState(<UKFlagIcon />);
  const [selectedTo, setSelectedTo] = useState('GBP');

  useEffect(() => {
    const fectchExchangeData = async () => {
      try{
        const response = await fetch("http://localhost:5000");
        const data = response.json();
        setExchangeData(data);
      } catch (error) {
        console.error('Error fetching exchange data: ', error);
      }
    }

    fectchExchangeData();
  }, [])

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
