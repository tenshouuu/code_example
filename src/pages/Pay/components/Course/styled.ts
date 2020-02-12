import styled, { css } from 'styled-components';
import {
    createTypographyStyleByName,
    getColorByName,
    getMediaWidthByName,
    getShadowByName,
} from '@client/helpers';
import { Subject, AvatarBlock, Button } from '@client/ui/components';
import { AvatarBlockProps } from '@client/ui/components/AvatarBlock';

interface RootProps {
    disabled: boolean;
}

export const Close = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 16px;
    height: 16px;
    transform: rotate(45deg);

    &:after,
    &:before {
        display: block;
        content: "";
        transition: 0.3s;
        background-color: ${getColorByName('gray')};
    }

    &:after {
        width: 100%;
        height: 2px;
    }

    &:before {
        position: absolute;
        left: calc(50% - 1px);
        width: 2px;
        height: 100%;
    }
`;

export const CloseWrapper = styled.div`
    display: none;
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;

    &:hover > ${Close}:before,
    &:hover > ${Close}:after {
        background-color: ${getColorByName('darkGray')};
    }
`;

function getDisabledStyles() {
    return ({ disabled }) => (disabled ? css`
        opacity: 0.7;
        filter: grayscale(70%);

        & > ${CloseWrapper} {
            display: none;
        }

        & > * {
            pointer-events: none;
        }
    ` : '');
}

export const StyledButton = styled(Button)``;
export const AddArea = styled.div`
    opacity: 0;
    transition: 0.3s;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${getColorByName('lightGreen', 0.7)};
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        opacity: 1;
    }
`;

function getHoverStyles() {
    return ({ disabled }) => (!disabled ? css`
        & > ${AddArea} {
            display: none;
        }
    ` : '');
}

export const CourseWrapper = styled.div<RootProps>`
    background-color: ${getColorByName('white')};
    color: ${getColorByName('darkBlue')};
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: ${getShadowByName('depth4')};
    padding: 16px 40px 16px 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    ${getDisabledStyles()};

    & > h2 {
        min-width: 82px;
        text-align: right;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        flex-flow: wrap row;
        padding: 16px 20px;

        & > *:not(:last-child) {
            margin-bottom: 16px;
        }

        & > h2 {
            width: 100%;
            text-align: center;
        }
    }
`;

export const CourseRoot = styled.div<RootProps>`
    position: relative;

    &:hover > ${AddArea} {
        opacity: 1;
    }

    ${getHoverStyles()};
`;

export const StyledSubject = styled(Subject)`
    margin-right: 1.28vw;
    width: 70px;
    min-width: 70px;
    height: 54px;
    padding: 0;

    & > div:first-child {
        top: -120px;
        left: -78px;
    }

    & > div:nth-child(2) {
        bottom: -120px;
        right: -82px;
    }

    & > * {
        justify-content: center;
    }

    & p {
        display: none;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-right: 16px;
    }
`;

export const CourseInfo = styled.div`
    display: flex;
    align-items: center;
    min-width: 230px;
    width: 30%;
    margin-right: 0.5vw;

    & > div:last-child {
        & > p {
            color: ${getColorByName('darkGray')};
            ${createTypographyStyleByName('paragraph3')};
            margin-bottom: 4px;
        }

        & > h4 {
            ${createTypographyStyleByName('header5')}
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: auto;
        margin-right: 20px;
    }
`;

export const StyledAvatarBlock = styled(AvatarBlock)<AvatarBlockProps>`
    min-width: min-content;
    width: 22%;

    & > div:first-child {
        width: 36px;
        min-width: 36px;
        height: 36px;
    }

    & > div:last-child {
        & > p:first-child {
            ${createTypographyStyleByName('paragraph3')};
        }
    }

    @media (min-width: ${getMediaWidthByName('semiFull')}) {
        width: 20%;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 100%;
    }
`;

export const Price = styled.h2`
    white-space: nowrap;
    ${createTypographyStyleByName('header4')}
`;
