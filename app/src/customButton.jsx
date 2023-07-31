import React from 'react';

function customButton({className, icon}){
    return (
        <div className={className}>
            <a href='#'>
                {icon}
            </a>
        </div>
    )
}

export default customButton