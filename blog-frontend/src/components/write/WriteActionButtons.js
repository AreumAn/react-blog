import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonsBlock = styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;
    button + button {
        margin-left: 0.5rem;
    }
`;

const StyledButton = styled(Button)`
    height: 2.125rem;
    & + & {
        margin-left: 0.5rem;
    }
`;

const WriteActionButtons = ({ onCancel, onPublish }) => {
    return (
        <WriteActionButtonsBlock>
            <StyledButton cyan onClick={onPublish}>
                PUBLISH
            </StyledButton>
            <StyledButton onClick={onCancel}>CANCEL</StyledButton>
        </WriteActionButtonsBlock>
    );
};

export default WriteActionButtons;
