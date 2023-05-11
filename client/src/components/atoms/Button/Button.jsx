import React from 'react';
import { StyledButton } from './styles';

const Button = ({
  type,
  action,
  children,
  icon,
  secondary,
  disabled
}) => (
  <StyledButton onClick={action} type={type} secondary={secondary} style={{ filter: disabled ? 'grayscale(100%)' : 'none' }}>
    {icon}
    {children}
  </StyledButton>
);

export default Button;
