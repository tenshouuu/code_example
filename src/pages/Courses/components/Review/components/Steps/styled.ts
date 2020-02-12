import styled from 'styled-components';
import Slider from 'react-slick';

import {
    createTypographyStyleByName,
    getColorByName,
    getMediaWidthByName,
} from '@client/helpers';

import { Step } from './components';
import { StepProps } from './components/Step';
import { ArrowProps } from './index';

export const StyledStep = styled(Step)<StepProps>``;

/* eslint-disable max-len */

export const StepsRoot = styled.section`
    position: relative;
    background-color: ${getColorByName('purple')};
    color: ${getColorByName('white')};
    padding: 48px 44px;
    border-radius: 6px;

    & > h2 {
        text-align: center;
        margin-bottom: 44px;
        ${createTypographyStyleByName('header3')};
    }

    & > div:last-child {
        display: flex;
        justify-content: space-between;

        & > ${StyledStep} {
            width: 30%;
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 24px 0;

        & > h2 {
            padding: 0 32px;
            margin-bottom: 28px;
            ${createTypographyStyleByName('header4')};
        }

        & > div:last-child {
            display: none;
        }
    }
`;

export const StyledSlider = styled(Slider)`
    display: none !important;
    width: 100%;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: block !important;
        width: 100%;
    }
`;

export const StyledArrow = styled.div<ArrowProps>`
    position: absolute;
    bottom: 32px;
    left: ${({ position }) => (position === 'right' ? 96 : 32)}px;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    display: none;
    align-items: center;
    justify-content: center;
    background-color: ${({ position, ...props }) => getColorByName((position === 'left') ? 'white' : 'pink')(props)};

    & > i {
        font-size: 1.25rem;
        color: ${({ position, ...props }) => getColorByName((position === 'left') ? 'purple' : 'white')(props)};
        transform: ${({ position }) => (position === 'right' ? 'rotate(180deg)' : 'initial')};
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: flex;
    }
`;
