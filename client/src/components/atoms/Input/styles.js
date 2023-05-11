import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[1]};
`;

export const StyledInputLabel = styled.p`
  font-size: ${({ theme }) => theme.typography.legal.desktop.fontSize};
  color: ${({ theme }) => theme.palette.background.dark.primary};
`;

export const StyledInputWrapper = styled.div`
  padding: ${({ theme }) => theme.size[2.5]} ${({ theme }) => theme.size[4]};
  display: flex;
  gap: ${({ theme }) => theme.size[2.5]};
  border: .75px solid transparent;
  border-radius: ${({ theme }) => theme.size[3]};
  background-color: ${({ theme }) => theme.palette.background.dark.primary};
  transition: all 100ms ease-in-out;

  &:focus, :hover {
    border: .75px solid ${({ theme }) => theme.palette.background.light.primary}
  }
`;

export const StyledIcon = styled.svg`
  height: ${({ height }) => height || '18px'};
  aspect-ratio: 1 / 1;
  & path {
    fill: ${({ color }) => color || '#fff'};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  color: ${({ theme }) => theme.palette.default.light};
  background-color: transparent;
  resize: none;

  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.palette.background.dark.primary} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.palette.background.light.secondary} !important;
  }

  ::-webkit-datetime-edit-month-field:focus,
  ::-webkit-datetime-edit-month-field:active,
  ::-webkit-datetime-edit-year-field:focus,
  ::-webkit-datetime-edit-year-field:active { 
    background-color: transparent; 
    color: ${({ theme }) => theme.palette.default.light}
  }

  ::-webkit-calendar-picker-indicator { filter: invert(1); }
`;
