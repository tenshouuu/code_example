import styled from 'styled-components';
import { getMediaWidthByName, getShadowByName } from '@client/helpers';

import { ModuleCard, Bridge } from './components';

export const EmptyModule = styled.div``;
export const StyledModule = styled(ModuleCard)``;

export const EmptyBridge = styled.div`
    grid-row: 1 / span 2;
    justify-self: stretch;
    width: 72px;
`;

export const StyledBridge = styled(Bridge)`
    width: 72px;
    justify-self: stretch;
    grid-row: 1 / span 2;
`;

export const RowWrapper = styled.div<{ reverse?: boolean }>`
    position: relative;
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: min-content min-content;
    grid-template-columns: min-content;
    min-width: max-content;
    justify-items: stretch;
    margin: 0 54px;
    padding: 44px 0 32px;
    width: 100%;
    max-width: min-content;

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 40px;
    }

    &:last-child {
        ${StyledBridge}:first-child,
        ${StyledBridge}:last-child {
            display: none;
        }
    }

    ${StyledBridge}:first-child,
    ${StyledBridge}:last-child {
        position: absolute;
        top: 0;
    }

    &:nth-child(2n) > ${StyledBridge}:not(:first-child):not(:last-child) > div:first-child {
        transform: scaleX(-1);
    }

    ${EmptyModule},
    ${StyledModule} {
        position: relative;
        width: calc(162px + 2vw);
        padding: 16px 16px 20px;
    }

    ${StyledModule} {
        box-shadow: ${getShadowByName('depth2')};
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        position: relative;
        width: auto;
        min-width: fit-content;

        ${EmptyModule},
        ${StyledModule} {
            width: calc(162px + 8vw);
        }

        &:first-child {
            margin: 10px 0 16px;
            padding: 22px 64px 0;
        }
    }
`;
