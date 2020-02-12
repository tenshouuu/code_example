import styled from 'styled-components';

import { createTypographyStyleByName, getColorByName, getMediaWidthByName } from '@client/helpers';
import Lesson from '../Lesson';

export const StyledLesson = styled(Lesson)`
    margin-bottom: 20px;

    &:not(:last-child) {
        margin-right: 18px;
    }

    @media (max-width: ${getMediaWidthByName('tabletFull')}) {
        &:not(:last-child) {
            margin-right: 0;
        }

        margin-bottom: 20px;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 20px;
    grid-template-rows: min-content min-content min-content;
    grid-template-columns: repeat(auto-fit, 220px);
    grid-auto-columns: 220px;
    justify-content:center;
    min-width: max-content;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        grid-auto-flow: row;
        grid-template-rows: min-content;

        & > *:nth-child(3n + 3) {
            margin-bottom: 20px;
        }
    }
`;

export const ModalWrapperRoot = styled.div`
    padding: 24px 0;

    & > h2 {
        text-align: center;
        margin-bottom: 26px;
        color: ${getColorByName('darkBlue')};
        ${createTypographyStyleByName('header3')};
    }

    & > div {
        padding: 16px;
        min-width: 252px;
        min-height: 252px;
        max-width: 972px;
        overflow-x: scroll;
    }

    @media (max-width: ${getMediaWidthByName('tabletFull')}) {
        padding: 14px 0;

        & > div {
            max-width: 732px;
        }
    }

    @media (max-width: ${getMediaWidthByName('tablet')}) {
        & > div {
            max-width: 492px;
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 20px 0;
        width: 100%;
        overflow-y: hidden;
        display:flex;
        flex-flow: column nowrap;
        & > div {
            padding: 12px;
            overflow-y: scroll;
            width: 100%;

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
`;
