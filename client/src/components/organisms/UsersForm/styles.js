import styled from 'styled-components';

export const StyledInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[4]};
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
