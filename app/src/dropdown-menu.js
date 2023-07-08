import React, {useState} from 'react';
import {ReactComponent as CanadaFlagIcon} from './icons/canada-flag-icon.svg';
import {ReactComponent as UKFlagIcon} from './icons/uk-flag-icon.svg';


function DropdownMenu({ className, triggerIcon, setTriggerIcon, selected, setSelected}) {
    const [open, setOpen] = useState(false);

    const handleDropdownItemClick = (icon, name) => {
      setTriggerIcon(icon);
      setSelected(name);
      setOpen(false);
    };
  
    const dropdownItems = [
      { icon: <CanadaFlagIcon />, name: "CAD" },
      { icon: <UKFlagIcon />, name: "GBP" },
      { icon: <CanadaFlagIcon />, name: "CAD" },
      { icon: <UKFlagIcon />, name: "GBP" },
      { icon: <CanadaFlagIcon />, name: "CAD" },
      { icon: <UKFlagIcon />, name: "GBP" }
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
    'CAD': 'CAD - Canadian Dollars',
    'GBP': 'GBP - British Pounds'
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
