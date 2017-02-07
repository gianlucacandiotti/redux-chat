import React from 'react';

const Button = ({
  children,
  ...buttonProps,
}) => (
  <button {...buttonProps}>
    {children}
  </button>
);

export default Button;
