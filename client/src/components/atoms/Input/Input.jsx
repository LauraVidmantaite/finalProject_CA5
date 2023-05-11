import React from 'react';
import { StyledInputContainer, StyledInputWrapper, StyledInput, StyledInputLabel, StyledIcon } from './styles';

const Input = ({
  type,
  placeholder,
  value,
  min,
  max,
  onChange,
  label,
  icon: Icon,
}) => (
  <StyledInputContainer>
    <StyledInputLabel>{label}</StyledInputLabel>
    <StyledInputWrapper>
      {Icon && (
        <StyledIcon>
          <Icon />
        </StyledIcon>
      )}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </StyledInputWrapper>
  </StyledInputContainer>
);

export default Input;
