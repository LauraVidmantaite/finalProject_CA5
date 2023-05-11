import styled from 'styled-components';
import { ReactComponent as IconUpdate } from '../../../icons/update.svg';
import { ReactComponent as IconDelete } from '../../../icons/delete.svg';

export const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  border-radius: ${({ theme }) => theme.size[2]};
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.dark.secondary};

  tr:last-child td:first-child { 
    border-bottom-left-radius: ${({ theme }) => theme.size[2]}
  };
  tr:last-child td:last-child {
    border-bottom-right-radius: ${({ theme }) => theme.size[2]}
  };
`;

export const StyledTableHead = styled.thead`
  th {
    padding: ${({ theme }) => theme.size[4]} ${({ theme }) => theme.size[10]};
    text-align: left;
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    line-height: ${({ theme }) => theme.typography.body.lineHeight};
    font-weight: 600;
    color: ${({ theme }) => theme.palette.default.light};
  }
`;

export const StyledTableDataCell = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size[4]};
`;

export const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.size[8]};
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.background.dark.secondary};

  p {
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: 600;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const StyledUserName = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[0.5]};
`;

export const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size[6]};
  opacity: 0;
  transition: opacity 100ms ease-in-out;
`;

export const StyledUpdateButton = styled(IconUpdate)`
  height: ${({ height }) => height || '18px'};
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
height: ${({ height }) => height || '18px'};
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

export const StyledTableBody = styled.tbody`
 td {
    padding: ${({ theme }) => theme.size[4]} ${({ theme }) => theme.size[10]};
    text-align: left;
    font-size: ${({ theme }) => theme.typography.legal.desktop.fontSize};
    line-height: ${({ theme }) => theme.typography.legal.desktop.lineHeight};
    color: ${({ theme }) => theme.palette.background.light.secondary};

    &:first-child {
      margin-left: ${({ theme }) => theme.size[4]};
    }

    &:last-child {
      margin-right: ${({ theme }) => theme.size[4]};
    }
  }

  tr {
    background-color: ${({ theme }) => theme.palette.background.dark.primary};
    &:nth-child(even) {
      background-color: ${({ theme }) => theme.palette.background.dark.secondary};
      ${StyledTableDataCell} {
        ${StyledAvatar} {
          background-color: ${({ theme }) => theme.palette.background.dark.primary};
        }
      }
    }
    
    &:hover {
      ${StyledActions} {
        opacity: 1;
      }
    }
  }
`;
