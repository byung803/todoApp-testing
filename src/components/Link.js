import React from 'react';

export const Link = ({ children, active, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
    >
        {children}</button>
)

export default Link;