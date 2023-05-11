import React from 'react';
import { StyledAddButton } from './styles';

const AddButton = ({ action }) => (
    <StyledAddButton onClick={action}>
        <i className="fa-solid fa-plus"></i>
    </StyledAddButton>
);

export default AddButton;
