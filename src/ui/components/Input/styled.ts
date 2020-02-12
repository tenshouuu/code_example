import styled from 'styled-components';
import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName,
} from '@client/helpers';
import { InputProps } from './index';

export const InputStyled = styled.input<InputProps>`
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    padding: 16px 24px;
    border-radius: 6px;
    border: 1px solid ${({ isValid, ...props }) => getColorByName(isValid ? 'lightGray' : 'red')(props)};
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
        border-color: ${({ isValid, ...props }) => getColorByName(isValid ? 'darkGray' : 'red')(props)};
    }

    &:focus {
        border-color: ${({ isValid, ...props }) => getColorByName(isValid ? 'purple' : 'red')(props)};
        outline: 0;
        box-shadow: 0 0 0 2px ${getColorByName('purple', 0.2)};
    }
`;
