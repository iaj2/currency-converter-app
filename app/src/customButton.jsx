import React from 'react';

function CustomButton({className, icon}){
    return (
        <div className={className}>
            <button>
                {icon}
            </button>
        </div>
    )
}

export default CustomButton;