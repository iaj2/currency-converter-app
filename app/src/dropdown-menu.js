import React from 'react';
import {ReactComponent as CanadaFlagIcon} from './icons/canada-flag-icon.svg';
import {ReactComponent as UKFlagIcon} from './icons/uk-flag-icon.svg';


function DropdownMenu({ className, triggerIcon, setTriggerIcon, selected, setSelected}) {
    
    return(
    <div className={`dropdown-trigger-container ${className}`}>
        <a href='#' className='dropdown-trigger'>
          {triggerIcon}
          </a>

      <div className='dropdown-container'>
        <div className="dropdown-container-inner">
          <DropdownItem icon={<CanadaFlagIcon/>} name='CAD'/>
          <DropdownItem icon={<UKFlagIcon />} name='GBP'/>
          <DropdownItem icon={<CanadaFlagIcon/>} name='CAD'/>
          <DropdownItem icon={<UKFlagIcon />} name='GBP'/>
          <DropdownItem icon={<CanadaFlagIcon/>} name='CAD'/>
          <DropdownItem icon={<UKFlagIcon />} name='GBP'/>
          </div>
        </div>
      </div>
      
    );
}

function DropdownItem({icon, name}){
  const nameMap = {
    'CAD': 'CAD - Canadian Dollars',
    'GBP': 'GBP - British Pounds'
  }

  return(
    <div className='dropdown-item-container'>
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
