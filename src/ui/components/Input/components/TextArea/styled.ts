import styled from 'styled-components';
import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName,
} from '@client/helpers';

export const TextAreaStyled = styled.textarea`
    display: block;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    min-height: 56px;
    padding: 16px 24px;
    border-radius: 6px;
    border: 1px solid ${getColorByName('lightGray')};
    color: ${getColorByName('darkBlue')};
    ${createTypographyStyleByName('paragraph1')};
    font-family: ${getFamilyByName('medium')};
    outline: none;
    transition: all 0.3s;

    & + & {
        margin-top: 12px;
    }

    &::placeholder {
        color: ${getColorByName('darkGray')};
    }

    &:hover {
        border-color: ${getColorByName('darkGray')};
    }

    &:focus {
        border-color: ${getColorByName('purple')};
        outline: 0;
        box-shadow: 0 0 0 2px ${getColorByName('purple', 0.2)};
    }
`;
