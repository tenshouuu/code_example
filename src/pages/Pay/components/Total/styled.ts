import styled, { css } from 'styled-components';
import {
    createTypographyStyleByName, getColorByName, getFamilyByName, getMediaWidthByName,
} from '@client/helpers';
import { Button, CheckBox } from '@client/ui/components';
import { CheckBoxProps } from '@client/ui/components/CheckBox';

export const StyledLink = styled.span`
    cursor: pointer;
`;

export const TotalRoot = styled.div`
    background-color: ${getColorByName('purple')};
    color: ${getColorByName('white')};

    & > h2 {
        ${createTypographyStyleByName('header3')};
        margin-bottom: 20px;
    }

    & > p:nth-child(2) {
        font-size: 3.125rem;
        line-height: 3.438rem;
        white-space: nowrap;
        margin-bottom: 8px;
    }

    & > p:nth-child(3) {
        ${createTypographyStyleByName('paragraph1')};
        font-family: ${getFamilyByName('medium')};
        margin-bottom: 28px;
    }

    & > p:last-child {
        ${createTypographyStyleByName('paragraph4')};
        font-family: ${getFamilyByName('medium')};
    }
`;

export const StyledCheckBox = styled(CheckBox)<CheckBoxProps>``;

export const Checker = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;

    & > ${StyledCheckBox} {
        margin-right: 12px;
    }

    & > p > span,
    & > p > ${StyledLink} {
        color: ${getColorByName('white')};
        ${createTypographyStyleByName('paragraph4')}
    }

    & > p > ${StyledLink} {
        border-bottom: 1px dashed ${getColorByName('white')};
    }
`;

export const StyledButton = styled(Button)<{ disabled: boolean }>`
    min-width: 100%;
    margin-bottom: 20px;

    ${({ disabled }) => (disabled ? css`
        opacity: 0.5;
        pointer-events: none;
    ` : '')}
`;

export const StyledRules = styled.div`
    margin-bottom: 20px;
    ${createTypographyStyleByName('header1')}

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        ${createTypographyStyleByName('header4')}
    }
`;
