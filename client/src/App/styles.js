import styled from "styled-components";

export const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.default.dark};
`;

export const StyledContainer = styled.div`
  padding: 64px 0 36px;
  max-width: 1224px;
  width: calc(100% - 64px);

  @media screen and (min-width: 1024px){
    padding: 72px 0 38px;
  }
`;

export const StyledHeadingContainer = styled.div`
  margin: ${({ theme }) => theme.size[10]} 0 ${({ theme }) => theme.size[6]};
  padding-bottom: ${({ theme }) => theme.size[6]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.75px solid ${({ theme }) => theme.palette.background.dark.primary};
`;

export const StyledHeadingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.size[2]};
`;

export const StyledHeading = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3.mobile};
  line-height: ${({ theme }) => theme.typography.h3.mobile};
  font-weight: 400;
  color: ${({ theme }) => theme.palette.default.light};

  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.h3.desktop};
    line-height: ${({ theme }) => theme.typography.h3.desktop};
  }
`;

export const StyledCopy = styled.p`
  font-size: ${({ theme }) => theme.typography.legal.mobile.fontSize};
  line-height: ${({ theme }) => theme.typography.legal.mobile.lineHeight};
  color: ${({ theme }) => theme.palette.background.light.secondary};

  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.legal.desktop.fontSize};
    line-height: ${({ theme }) => theme.typography.legal.desktop.lineHeight};
  }
`;

export const StyledPagination = styled.div`
  margin: ${({ theme }) => theme.size[6]} 0 ${({ theme }) => theme.size[10]};
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.size[2]};

  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
  }
`;
