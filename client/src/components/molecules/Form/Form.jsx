import React from 'react';
import { StyledForm } from './styles';

const Form = ({
  action,
  children,
}) => (
  <StyledForm onSubmit={action}>{children}</StyledForm>
);

export default Form;
