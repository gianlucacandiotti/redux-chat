import React from 'react';

const Button = ({
  children,
  className,
  disabled,
  onClick
}) => (
  <button className={className} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

export default Button;
