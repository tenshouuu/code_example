import styled, { css, FlattenInterpolation } from 'styled-components';

import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName, getMediaWidthByName, getShadowByName,
} from '@client/helpers';

import { Button } from '@client/ui/components';
import Locky from '@client/pages/Courses/components/Main/components/Content/components/Locky';
import { Pointer } from './components';
import { ModuleCardProps, ModuleCardTypeEnum } from './index';

export const StyledLocky = styled(Locky)`
    height: min-content;
    width: min-content;
    min-width: min-content;
    display: inline-block;
    background-color: transparent;
    color: ${getColorByName('white')};
    margin-right: 8px;
`;

export const StyledPointer = styled(Pointer)`
    position: absolute;
    top: -30px;
    left: -18px;
    transform: rotate(-28deg);

    & span {
        text-align: center;
        margin-top: 10px;
        padding: 0 12px;
        display: inline-block;
        color: ${getColorByName('white')};
        ${createTypographyStyleByName('paragraph4')};
        font-family: ${getFamilyByName('medium')};
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        left: -8px;
    }
`;

export const Label = styled.p`
    text-align: center;
    margin-bottom: 10px;
    ${createTypographyStyleByName('paragraph4')};
    font-family: ${getFamilyByName('medium')};
`;

export const WebinarTypeName = styled.h4`
    text-align: center;
    ${createTypographyStyleByName('header5')}
`;

export const Description = styled.p`
    ${createTypographyStyleByName('paragraph4')};
    color: ${getColorByName('darkGray')};
    margin-bottom: 4px;
    text-align: center;
`;

function renderHeaderStylesByStatus({ status, isHover, disabled }): FlattenInterpolation<any> {
    let styles: FlattenInterpolation<any> = css``;
    switch (status) {
        case ModuleCardTypeEnum.INTRO:
            styles = css`
                background-color: ${getColorByName('pink')};

                &:hover {
                    background-color: ${getColorByName('pink', 0.8)};
                }

                ${disabled ? `background-color: ${getColorByName('pink', 0.8)};` : ''};

                ${isHover && !disabled ? css`
                    @media (min-width: ${getMediaWidthByName('mobile')}) {
                        transform: translate(0px, -5px) scale(1.1);
                        background-color: ${getColorByName('pink', 0.8)};
                    };
                ` : ''}
            `;
            break;
        case ModuleCardTypeEnum.BOUGHT:
        case ModuleCardTypeEnum.LOCKED:
        case ModuleCardTypeEnum.FIRST_LOCKED:
            styles = css`
                background-color: ${getColorByName('purple')};

                &:hover {
                    background-color: ${getColorByName('lightPurple')};
                }

                ${disabled ? `background-color: ${getColorByName('lightPurple')};` : ''};

                ${isHover && !disabled ? css`
                    @media (min-width: ${getMediaWidthByName('mobile')}) {
                        transform: translate(0px, -5px) scale(1.1);
                        background-color: ${getColorByName('lightPurple')};
                    };
                ` : ''}
            `;
            break;
        default:
            break;
    }
    return styles;
}

interface StyledModuleProps {
    disabled: boolean;
    isHover: boolean;
    status: ModuleCardTypeEnum;
}

export const Header = styled.div<StyledModuleProps>`
    z-index: 1;
    border-radius: 12px 12px 0 0;
    cursor: pointer;
    color: ${getColorByName('white')};
    box-shadow: ${getShadowByName('depth2')};
    transition: 0.3s;

    ${({ disabled }) => (disabled ? css`
        pointer-events: none;
    ` : '')}

    ${renderHeaderStylesByStatus}
`;

export const StyledButton = styled(Button)`
    pointer-events: initial;
    margin-top: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    ${({ disabled }) => (disabled ? 'pointer-events: none' : '')};

    & > span {
      ${createTypographyStyleByName('button1')};
    }
`;


function renderFooterStylesByStatus({ status, buttonDisabled }) {
    let styles: FlattenInterpolation<any> = css``;
    switch (status) {
        case ModuleCardTypeEnum.INTRO:
        case ModuleCardTypeEnum.BOUGHT:
        case ModuleCardTypeEnum.LOCKED:
            styles = css`
                ${StyledButton} {
                    background-color: ${getColorByName('darkGray', buttonDisabled || status === ModuleCardTypeEnum.LOCKED ? 0.6 : 1)};

                    &:hover {
                        background-color: ${getColorByName('darkGray', 0.9)};
                    }
                }
            `;
            break;
        case ModuleCardTypeEnum.FIRST_LOCKED:
            styles = css`
                ${StyledButton} {
                    background-color: ${getColorByName('lightGreen')};

                    &:hover {
                        background-color: ${getColorByName('lightGreen', 0.9)};
                    }
                }
            `;
            break;
        default:
            break;
    }
    return styles;
}

export const Footer = styled.div<StyledModuleProps & { buttonDisabled: boolean }>`
    display: flex;
    z-index: 1;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 0 0 12px 12px;
    background-color: ${getColorByName('white')};
    cursor: pointer;
    transition: 0.3s;

    ${({ disabled, isHover }) => (isHover && !disabled ? css`
        @media (min-width: ${getMediaWidthByName('mobile')}) {
            transform: translate(0px, 5px) scale(1.1);
        }
    ` : '')};

    ${({ disabled }) => (disabled ? 'pointer-events: none' : '')};

    ${renderFooterStylesByStatus};
`;

export const WebinarName = styled.h4``;
export const ExpDateTitle = styled.p`
    text-align: center;
    color: ${getColorByName('darkBlue')};
    ${createTypographyStyleByName('header5')};
`;
