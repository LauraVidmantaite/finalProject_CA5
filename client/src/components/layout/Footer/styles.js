import styled from 'styled-components';

export const StyledFooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 0.75px solid ${({ theme }) => theme.palette.background.dark.primary};
`;

export const StyledFooter = styled.div`
  margin: 0 ${({ theme }) => theme.size[8]};
  padding: ${({ theme }) => theme.size[3]} 0;
  max-width: 1224px;
  width: 100%;
`;

export const StyledFooterContent = styled.p`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.legal.mobile.fontSize};
  line-height: ${({ theme }) => theme.typography.legal.mobile.fontSize};
  color: ${({ theme }) => theme.palette.background.dark.primary};

  @media screen and (min-width: 1024px){
    justify-content: flex-end;
    font-size: ${({ theme }) => theme.typography.legal.desktop.fontSize};
    line-height: ${({ theme }) => theme.typography.legal.desktop.fontSize};
  }
`;
