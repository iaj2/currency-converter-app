import React from 'react';

function CustomTextField({label, value, onChange}){

    return (
        <div className='CustomTextField'>
            <label>{label}</label>
            <input type='text' value={value} onChange={onChange}></input>
        </div>
    )
}

export default CustomTextField;