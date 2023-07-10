import React, {useState} from 'react';
import {ReactComponent as CanadaFlagIcon} from './icons/canada-flag-icon.svg';
import { ReactComponent as USFlagIcon } from './icons/usa-flag-icon.svg';
import {ReactComponent as UKFlagIcon} from './icons/uk-flag-icon.svg';
import {ReactComponent as EUFlagIcon} from './icons/eu-flag-icon.svg';
import {ReactComponent as AUFlagIcon} from './icons/australia-flag-icon.svg';
import {ReactComponent as JPFlagIcon} from './icons/japan-flag-icon.svg';
import {ReactComponent as SwissFlagIcon} from './icons/swiss-flag-icon.svg';
import {ReactComponent as NZFlagIcon} from './icons/new-zealand-flag-icon.svg';
import {ReactComponent as RUSFlagIcon} from './icons/russia-flag-icon.svg';
import {ReactComponent as SAFlagIcon} from './icons/south-africa-flag-icon.svg';
import {ReactComponent as MXFlagIcon} from './icons/mexico-flag-icon.svg';
import {ReactComponent as UAEFlagIcon} from './icons/uae-flag-icon.svg';



function DropdownMenu({ className, triggerIcon, setTriggerIcon, selected, setSelected}) {
    const [open, setOpen] = useState(false);

    const handleDropdownItemClick = (icon, name) => {
      setTriggerIcon(icon);
      setSelected(name);
      setOpen(false);
    };
  
    const dropdownItems = [
      { icon: <CanadaFlagIcon />, name: "CAD" },
      { icon: <USFlagIcon />, name: "USD"},
      { icon: <EUFlagIcon />, name: "EUR" },
      { icon: <UKFlagIcon />, name: "GBP" },
      { icon: <AUFlagIcon />, name: "AUD" },
      { icon: <JPFlagIcon />, name: "JPY"},
      { icon: <SwissFlagIcon />, name: "CHF"},
      { icon: <NZFlagIcon />, name: "NZD"},
      { icon: <RUSFlagIcon />, name: "RUB"},
      { icon: <SAFlagIcon />, name: "ZAR"},
      { icon: <MXFlagIcon />, name: "MXN"},
      { icon: <UAEFlagIcon />, name: "UAE"}
    ];

    return (
      <div className={`dropdown-trigger-container ${className}`}>
        <span className='selected-item-name'>{selected}</span>
        <a href="#" className="dropdown-trigger" onClick={() => setOpen(!open)}>
          {triggerIcon}
        </a>
  
        {open && (
          <div className="dropdown-container">
            <div className="dropdown-container-inner">
              {dropdownItems.map(item => (
                <DropdownItem
                  icon={item.icon}
                  name={item.name}
                  onClick={() => handleDropdownItemClick(item.icon, item.name)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
}

function DropdownItem({icon, name, onClick}){
  const nameMap = {
    'CAD': 'CAD - Canadian Dollar',
    'GBP': 'GBP - British Pound',
    'EUR': 'EUR - Euros',
    'AUD': 'AUD - Australian Dollar',
    'JPY': 'JPY - Japanese Yen',
    'CHF': 'CHF - Swiss Franc',
    'NZD': 'NZD - New Zealand Dollar',
    'RUB': 'RUB - Russian Rouble',
    'ZAR': 'ZAR - South African Rand',
    'MXN': 'MXN - Mexican Peso',
    'UAE': 'UAE - United Arab Emirates Dirham',
    'USD': 'USD - US Dollar'
  }

  return(
    <div className='dropdown-item-container' onClick={onClick}>
        <div className='dropdown-icon'>
          {icon}
          </div>
        <p className='dropdown-item-name'>
          {nameMap[name]}
          </p>
        <div className='dropdown-item-underline'>

        </div>
      </div>
  );
}

export default DropdownMenu;
