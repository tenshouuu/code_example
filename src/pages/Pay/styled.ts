import styled from 'styled-components';
import { getColorByName, getMediaWidthByName, getShadowByName } from '@client/helpers';

export const EmptyArea = styled.div`
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: none;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: ${getShadowByName('depth4')};

    & > div {
        display: flex;
        flex-direction: column;

        &:first-child {
            flex: 1;
        }

        &:last-child {
            width: 24%;
            min-width: 250px;
        }

        & > * {
            padding: 32px;
            box-sizing: border-box;
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        flex-direction: column;
        border-radius: 0;

        & > div {
            width: 100% !important;

            & > * {
                padding: 28px 5vw;
            }

            &:first-child > *:last-child {
                display: none;
            }
        }

        & > div:last-child {
            flex-direction: column-reverse;
        }
    }
`;

export const LoadingRoot = styled.section`
    padding: 32px 16px 32px;
    border-radius: 36px;
    height: 100%;
    background-color: ${getColorByName('white')};

    & > * {
        margin-bottom: 40px;
    }
`;
export const PayRoot = styled.section`
    padding: 32px 6.28vw 32px 32px;
    box-sizing: border-box;
    height: 100%;
    background-color: ${getColorByName('lightGray')};

    @media (max-width: ${getMediaWidthByName('semiDesktop')}) {
        & {
            padding: 32px;
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        border-radius: 36px 36px 0 0;
        overflow: hidden;
        padding: 0;
        background-color: ${getColorByName('white')};
    }
`;
