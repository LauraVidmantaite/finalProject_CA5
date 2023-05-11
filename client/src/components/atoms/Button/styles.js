import styled from 'styled-components';

export const StyledButton = styled.button`
  padding:  ${({ secondary }) => (secondary === 'secondary' ? '8px 12px' : '8px  16px')};
  display: flex;
  justify-content: center;
  align-items: center;
  gap:  ${({ theme }) => theme.size[2]};
  border: none;
  border-radius:  ${({ secondary, theme }) => (secondary === 'secondary' ? '50%' : theme.size[1.5])};
  color: ${({ secondary, disabled, theme }) => secondary === 'secondary' ? theme.palette.primary.main : theme.palette.default.dark};
  background-color: ${({ secondary, theme }) => secondary === 'secondary' ? theme.palette.background.dark.secondary : theme.palette.primary.main};
  transition: all 150ms ease-in-out;

  i {
    font-size: ${({ theme }) => theme.size[4]};
    color: ${({ theme }) => theme.palette.background.dark.primary};
  }

  &:active {
    background-color: ${({ secondary, theme }) => secondary === 'secondary' ? theme.palette.background.dark.primary : theme.palette.primary.light};
  }
  
  @media screen and (min-width: 1024px) {
    &:hover {
      background-color: ${({ secondary, theme }) => secondary === 'secondary' ? theme.palette.background.dark.primary : theme.palette.primary.light};
    }
  }
`;
