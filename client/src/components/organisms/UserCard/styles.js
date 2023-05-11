import styled from 'styled-components';
import { ReactComponent as IconUpdate } from '../../../icons/update.svg';
import { ReactComponent as IconDelete } from '../../../icons/delete.svg';

export const StyledCard = styled.article`
  padding: ${({ theme }) => theme.size[6]} ${({ theme }) => theme.size[4]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[6]};
  border-radius: ${({ theme }) => theme.size[2]};
  background-color: ${({ theme, isOdd }) =>
    isOdd ? theme.palette.background.dark.secondary : theme.palette.background.dark.primary};

  @media screen and (min-width: 576px) {
    padding: ${({ theme }) => theme.size[6]} ${({ theme }) => theme.size[9]};
  }
`;

export const StyledUserContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size[3]};
  width: 100%;
`;

export const StyledUserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.size[12]};
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ theme, isOdd }) =>
    isOdd ? theme.palette.background.dark.primary : theme.palette.background.dark.secondary};

  p {
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: 600;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  @media screen and (min-width: 768px){
    height: ${({ theme }) => theme.size[14]};

    p {
     font-size: ${({ theme }) => theme.size[6]};
   }
  }
`;

export const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[0.5]};
  width: 100%;
`;

export const StyledUserName = styled.p`
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.default.light};
`;

export const StyledUserEmail = styled.p`
  font-size: ${({ theme }) => theme.typography.legal.desktop.fontSize};
  color: ${({ theme }) => theme.palette.background.light.secondary};
`;

export const StyledCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StyledMembershipData = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[2]};
`;

export const StyledLabel = styled.p`
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.default.light};
`;

export const StyledDates = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.size[6]};
  font-size: ${({ theme }) => theme.typography.legal.desktop.fontSize};
  color: ${({ theme }) => theme.palette.background.light.secondary};
`;

export const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size[6]};
`;

export const StyledUpdateButton = styled(IconUpdate)`
  height: ${({ height }) => height || '24px'};
  & path {
    transition: all 150ms ease-in-out;
  };

  &:hover path {
    fill: ${({ hoverColor }) => hoverColor || '#F7C857'};
  }

  &:active path {
    fill: ${({ hoverColor }) => hoverColor || '#F5BE37'};
  }
`;

export const StyledDeleteButton = styled(IconDelete)`
height: ${({ height }) => height || '24px'};
  & path {
    transition: all 150ms ease-in-out;
  };

  &:hover path {
    fill: ${({ hoverColor }) => hoverColor || '#FF3B3B'};
  }

  &:active path {
    fill: ${({ hoverColor }) => hoverColor || '#FF1C1C'};
  }
`;
