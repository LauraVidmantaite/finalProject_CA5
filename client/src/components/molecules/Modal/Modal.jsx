import { createPortal } from 'react-dom';
import React, { useEffect, useState } from 'react';
import {
    StyledOverlay,
    StyledModalWrapper,
    SyledCloseButtonContainer,
    StyledModal,
    StyledModalTopContainer,
    StyledModalTitle,
    StyledModalContentContainer,
} from './styles';

const Modal = ({ children, onClose, title, isOpen }) => {
    const [show, setShow] = useState(false);
    const [animating, setAnimating] = useState(false);

    const closeOnOverlay = (e) => {
        if (e.target.dataset.id === 'modalWrapper') {
            onClose();
        }
        return;
    };

    const closeOnClick = () => {
        onClose();
    };

    useEffect(() => {
        const closeModalOnEscape = (e) => {
            if (e.key === 'Escape') {
                onClose()
            }
        };

        document.addEventListener('keydown', closeModalOnEscape);

        return () => {
            document.removeEventListener('keydown', closeModalOnEscape);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
        } else {
            setTimeout(() => setShow(false), 350);
        }
    }, [isOpen])

    useEffect(() => {
        if(show && isOpen){
            setTimeout(() => setAnimating(true), 20);
        }else if(!isOpen){
            setAnimating(false);
        }
    }, [show, isOpen])

    if(!show) return null;

    return createPortal(
        <>
            <StyledOverlay className={animating ? 'overlay-open' : ''}></StyledOverlay>
            <StyledModalWrapper onClick={closeOnOverlay} data-id='modalWrapper'>
                <StyledModal className={animating ? 'modal-open' : ''}>
                    <StyledModalTopContainer>
                        <StyledModalTitle>{title}</StyledModalTitle>
                        <SyledCloseButtonContainer>
                            <span onClick={closeOnClick}><i className="fa-solid fa-xmark"></i></span>
                        </SyledCloseButtonContainer>
                    </StyledModalTopContainer>
                    <StyledModalContentContainer>{children}</StyledModalContentContainer>
                </StyledModal>
            </StyledModalWrapper>
        </>,
        document.getElementById('portal')
    );
};

export default Modal;
