import React from 'react';

function CustomButton({className, icon}){
    return (
        <div className={className}>
            <a href='#'>
                {icon}
            </a>
        </div>
    )
}

export default CustomButton;