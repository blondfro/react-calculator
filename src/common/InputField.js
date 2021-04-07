import React from 'react';

function InputField({ id, value, className}) {
    return (
        <input id={id} value={value} className={className} disabled />
    )
}

export default InputField;