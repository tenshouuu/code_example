import styled, { css } from 'styled-components';
import {getColorByName, getMediaWidthByName, getShadowByName} from '@client/helpers';
import { PageWrapperProps } from './index';

export const Info = styled.div`
    grid-area: info;
`;

export const Plan = styled.div`
    grid-area: plan;
`;

export const Content = styled.div`
    max-height: 100%;
    grid-area: content;
`;

export const BlocksWrapper = styled.div`
    display: grid;
    grid-template-areas: "content info" "content plan";
    grid-template-columns: 1fr minmax(300px, 26%);
    width: 100%;
    max-height: 100%;
    border-radius: 6px;
    background-color: ${getColorByName('white')};
    box-shadow: ${getShadowByName('depth4')};
    overflow: hidden;

    & > ${Info} > *,
    & > ${Plan} > * {
        padding: 30px;
        height: 100%;
        width: 100%;
    }

    @media (min-width: ${getMediaWidthByName('semiFull')}) {
        grid-template-columns: 1fr 380px;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        grid-template-areas: "content" "info" "plan" ;
        grid-template-rows: min-content min-content 1fr;
        grid-template-columns: 100%;

        & > ${Info} > *,
        & > ${Plan} > * {
            padding: 16px;
        }
        & > ${Info} > * {
            padding-bottom: 30px;
        }

        & > ${Content} > * {
            padding: 0;
        }
    }
`;

function renderPositionStyles({ mainChildrenPosition }) {
    return mainChildrenPosition === 'right'
        ? css`
            ${BlocksWrapper} {
                grid-template-areas: "plan content" "info  content";
                grid-template-columns: minmax(300px, 26%) 1fr;
                grid-template-rows: minmax(300px, 1fr) minmax(min-content, 350px);

                @media (min-width: ${getMediaWidthByName('semiFull')}) {
                  grid-template-columns: 380px 1fr;
                }

                @media (max-width: ${getMediaWidthByName('mobile')}) {
                  grid-template-areas: "content" "info" "plan";
                  grid-template-columns: 100%;
                  grid-template-rows: auto;
                }
            }
        `
        : css`

        `;
}

// eslint-disable-next-line max-len
export const PageWrapperRoot = styled.div<{ mainChildrenPosition: PageWrapperProps['mainChildrenPosition'] }>`
    display: flex;
    padding: 30px 0 30px 30px;
    box-sizing: border-box;
    width: 100%;
    height: calc(100vh - 70px - 72px);

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 0;
        height: max-content;
    }

    ${renderPositionStyles}
`;
