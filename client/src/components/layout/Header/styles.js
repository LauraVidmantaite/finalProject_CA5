import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { ReactComponent as IconLogout } from '../../../icons/logout.svg';

export const StyledHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 0.75px solid ${({ theme }) => theme.palette.background.dark.primary};
  background-color: rgba(34, 34, 34, 0.8);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px -5px;
  backdrop-filter: blur(5px);
`;

export const StyledHeader = styled.div`
  margin: 0 ${({ theme }) => theme.size[8]};
  padding: ${({ theme }) => theme.size[4]} 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1224px;
  width: 100%;
`;

export const StyledLogo = styled(Logo)`
  height: ${({ height }) => height || '24px'};

  @media screen and (min-width: 1024px){
    height: ${({ height }) => height || '32px'}
  }
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.size[6]};
`;

export const StyledUserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.size[3]};
`;

export const StyledLogoutButton = styled(IconLogout)`
  height: ${({ height }) => height || '20px'};
  & path {
    transition: all 150ms ease-in-out;
  };

  &:hover path {
    fill: ${({ hoverColor }) => hoverColor || '#A5FF4B'};
  }

  &:active path {
    fill: ${({ hoverColor }) => hoverColor || '#fff'};
  }

  @media screen and (min-width: 1024px){
    height: ${({ height }) => height || '24px'}
  }
`;

export const StyledUserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.size[8]};
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.background.dark.primary};

  p {
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: 600;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  @media screen and (min-width: 1024px){
    height: ${({ theme }) => theme.size[10]};

    p {
     font-size: ${({ theme }) => theme.size[5]};
   }
  }
`;

export const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.size[1]};

  @media screen and (min-width: 1024px){
    gap: ${({ theme }) => theme.size[1.5]};
  }
`;

export const StyledUserName = styled.p`
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  line-height: ${({ theme }) => theme.typography.body.fontSize};
  color: ${({ theme }) => theme.palette.default.light};
`;

export const StyledUserRole = styled.p`
  font-size: ${({ theme }) => theme.typography.legal.mobile.fontSize};
  line-height: ${({ theme }) => theme.typography.legal.mobile.fontSize};
  color: ${({ theme }) => theme.palette.background.light.secondary};

  @media screen and (min-width: 1024px){
    font-size: ${({ theme }) => theme.typography.legal.desktop.fontSize};
    line-height: ${({ theme }) => theme.typography.legal.desktop.fontSize};
  }
`;
