import styled, { css } from 'styled-components';

import {
    createTypographyStyleByName, getColorByName, getMediaWidthByName, getTypographyByName,
} from '@client/helpers';
import { Subject } from '@client/ui/components';
import { Panel } from './components';

export const StyledPanel = styled(Panel)`
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        order: 3;
        margin: 24px 0 12px;
    }
`;

export const StyledLink = styled.div`
    margin-right: 2vw;
    color: ${getColorByName('white')};
    font-size: ${props => getTypographyByName('header2')(props).size};
    cursor: pointer;
`;

export const Info = styled.div<{ hide: boolean }>`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > h2 > br {
        display: none;
    }

    ${({ hide }) => (hide ? css`
        ${StyledLink} {
            display: none;
        }
    ` : '')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {

    ${({ hide }) => (hide ? css`
        display: none;
    ` : 'order: 1')};
    }
`;

export const StyledSubject = styled(Subject)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    border-radius: 0;
    padding: 0 6.28vw 0 30px;


    @media (min-width: ${getMediaWidthByName('mobile')}) {

        & > div:nth-child(2) {
            bottom: -400%;
            right: -94px;
            width: 500px;
            height: 500px;
        }

        & > div:first-child {
            top: -233%;
            left: -58px;
            width: 300px;
            height: 300px;
        }
    }

    & > h2 {
        ${createTypographyStyleByName('header4')};
    }

    @media (max-width: ${getMediaWidthByName('semiDesktop')}) {
        width: 100%;
        padding-right: 30px;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        height: auto;
        padding: 16px;
        min-height: 74px;
        flex-wrap: wrap;
        justify-content: space-around;
        flex-direction: row-reverse;

        & > ${Info} {
            margin-right: 8px;

            & > h2 {
                display: none;
            }
        }
    }
`;

export const HeaderRoot = styled.header`
    display: flex;
    flex-direction: row;
`;
