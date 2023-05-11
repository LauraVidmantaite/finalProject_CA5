import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  opacity: 0;
  transition: opacity 0.3s ease-out;
  
  &.overlay-open {
    opacity: 1;
  }
`;

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledModalTopContainer = styled.div`
  padding: ${({ theme }) => theme.size[10]} ${({ theme }) => theme.size[8]} ${({ theme }) => theme.size[5]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: .375rem .375rem 0 0;
  border-bottom: .75px solid ${({ theme }) => theme.palette.background.dark.primary};
`;

export const StyledModalTitle = styled.h4`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.h4.mobile.fontSize};
  line-height: ${({ theme }) => theme.typography.h4.mobile.fontSize};
  font-weight: 400;

  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.h4.desktop.fontSize};
    line-height: ${({ theme }) => theme.typography.h4.desktop.fontSize};
  }
`;

export const SyledCloseButtonContainer = styled.div`
  span {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ theme }) => theme.size[7]};
    height: ${({ theme }) => theme.size[7]};
    font-size: ${({ theme }) => theme.size[5]};
    color: ${({ theme }) => theme.palette.background.dark.primary};
    transition: all 100ms ease-in-out;
    cursor: pointer;

    &:active {
      color: ${({ theme }) => theme.palette.primary.main};
    }

    @media screen and (min-width: 1024px) {
      &:hover {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;

export const StyledModalContentContainer = styled.div`
  padding: ${({ theme }) => theme.size[10]} ${({ theme }) => theme.size[8]} ${({ theme }) => theme.size[10]};
`;

export const StyledModal = styled.div`
  min-width: 311px;
  width: calc(100% - 4rem);
  border-radius: .375rem;
  border: .75px solid ${({ theme }) => theme.palette.background.dark.primary};
  background-color: ${({ theme }) => theme.palette.default.dark};
  opacity: 0;
  transform: translateY(-5%);
  transition: all 0.3s ease-out;
  &.modal-open {
    opacity: 1;
    transform: translateY(0%);
  }

  @media screen and (min-width: 768px) {
    max-width: 720px;
  }
`;
