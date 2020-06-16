import React from 'react';

const Button = ({ children }) => {
    return (
        <button style={{ backgroundColor: '#fffff', border: '1px solid #0000' }}>{children}</button>
    )
}

export default Button