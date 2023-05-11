import styled from 'styled-components';

export const StyledAddButton = styled.button`
  position: fixed;
  bottom: 52px;
  right: 32px;
  height: 56px;
  aspect-ratio: 1 / 1;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: rgba(0, 0, 0, 0.3) 2px 12px 28px 0px, rgba(0, 0, 0, 0.2) 0px 2px 8px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  transition: all 100ms ease-in-out;

  i {
    font-size: ${({ theme }) => theme.size[5]};
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;
