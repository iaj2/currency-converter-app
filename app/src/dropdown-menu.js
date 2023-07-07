import React, {useState, useEffect} from 'react';
import {ReactComponent as CanadaFlagIcon} from './icons/canada-flag-icon.svg';
import {ReactComponent as GBFlagIcon} from './icons/united-kingdom-flag-icon.svg';


function DropdownMenu({ className, triggerIcon, selectedItem}) {
    
    return(
    <div className={`dropdown-container ${className}`}>
        <a href='#' className='dropdown-trigger'>
          {triggerIcon}
          </a>
      <div className="dropdown-menu">
    
        </div>
      </div>
      
    );

}

export default DropdownMenu;
