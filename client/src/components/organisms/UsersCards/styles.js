import styled from 'styled-components';

export const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[4]};
`;
