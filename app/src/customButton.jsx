import React from 'react';

function CustomButton({className, icon, onClick}){
    return (
        <div className={className} onClick={onClick}>
            <a href='#'>
                {icon}
            </a>
        </div>
    )
}

export default CustomButton;