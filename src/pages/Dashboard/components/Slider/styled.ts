import styled from 'styled-components';
import { getColorByName, getMediaWidthByName } from '@client/helpers';


export const WebinarSliderRoot = styled.div`
    position: relative;
    grid-area: main;
    width: 100%;

    @media (min-width: ${getMediaWidthByName('mobile')}) {
        height: 100%;

        & > * {
            height: 100%;
        }

        & .slick-track, & .slick-list, & .slick-slide > div {
            height: 100%;
            padding-bottom: 0 !important;
        }
    }

    & .slick-list {
        margin: 0 -12px;
        transition: 0.2s;
    }

    & .slick-slide > div {
        padding: 0 12px 12px;
    }
`;

export const Arrows = styled.div<{ disable: boolean }>`
    position: absolute;
    right: 0;
    top: -44px;
    height: 32px;
    width: 71px;
    border-radius: 32px;
    box-sizing: border-box;
    background-color: ${getColorByName('white')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto 0;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-right: 12px;
        display: none;
    }

    & > div {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        flex: 1 0 0;
        cursor: pointer;
        height: 100%;
        padding: 0 12px;

        &::after {
            content: '';
            display: block;
            flex-shrink: 0;
            width: 8px;
            height: 8px;
            border-right: 2px solid ${getColorByName('gray')};
            border-top: 2px solid ${getColorByName('gray')};
            transition: border-color 0.2s ease;
        }

        &:hover::after {
            border-color: ${getColorByName('darkGray')};
        }
    }

    & > div:nth-child(1) {
        &::after {
            transform: rotate(225deg);
        }
    }

    & > div:nth-child(2) {
        &::after {
            transform: rotate(45deg);
        }
    }

    ${({ disable }) => (disable ? 'pointer-events: none' : '')};
`;
