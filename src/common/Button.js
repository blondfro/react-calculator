import React from 'react';

function Button({ id, value, className, click}) {
    return (
        <button id={id} value={value} className={className} onClick={click}>
            {value}
        </button>
    )
}

export default Button;