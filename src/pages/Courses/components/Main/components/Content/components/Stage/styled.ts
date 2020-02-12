import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
    createTypographyStyleByName, getColorByName, getFamilyByName, getMediaWidthByName,
} from '@client/helpers';
import { LinkButton } from '@client/ui/components';

import Locky from '../Locky';
import { StageProps } from './index';

export const Label = styled.h5`
    margin-bottom: 4px;
    max-width: calc(100% - 40px);
    color: ${getColorByName('darkBlue')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
         margin-bottom: 8px;
         max-width: calc(100% - 28px);
    }
`;
export const Title = styled.h5`
    max-width: 100%;
    color: ${getColorByName('purple')};
`;

export const TopWrapper = styled.div`
    padding: 16px;
    background-color: ${getColorByName('gray')};

    ${Label},
    ${Title} {
        ${createTypographyStyleByName('header5')};
    }

    & > p {
        margin-bottom: 12px;
        color: ${getColorByName('darkGray')};
        ${createTypographyStyleByName('paragraph4')};
    }

    & > p:nth-child(2) {
        font-family: ${getFamilyByName('medium')};
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 14px 12px;

        ${Label},
        ${Title} {
            ${createTypographyStyleByName('paragraph3')};
            font-family: ${getFamilyByName('medium')};
            max-width: 100%;
        }

        & > p {
            margin-bottom: 4px;
            color: ${getColorByName('darkGray')};
            ${createTypographyStyleByName('paragraph4')}
        }
    }
`;

function renderBottomStyles() {
    return ({ showBg, ...props }) => css`
        padding: ${showBg ? '0 16px 16px' : '12px 16px 16px'};
        background-color: ${getColorByName(showBg ? 'gray' : 'purple')(props)};

        & > p {
            color: ${getColorByName(showBg ? 'darkGray' : 'white')(props)};
        }
    `;
}

export const BottomWrapper = styled.div<{ showBg: StageProps['isLocked'] } >`
    flex: 1;
    display: none;
    flex-direction: column;
    justify-content: flex-end;
    ${renderBottomStyles()};

    & > p {
        margin-bottom: 8px;
        ${createTypographyStyleByName('paragraph3')}
    }
`;


export const StyledLink = styled(Link)``;
export const StyledLocky = styled(Locky)`
    position: absolute;
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 24px;
        height: 24px;

        ${createTypographyStyleByName('paragraph4')};
    }
`;
export const StyledLinkButton = styled(LinkButton)`
    background-color: ${getColorByName('white')};
    transition: 0.3s;
    cursor: pointer;
    margin-top: 16px;
    padding: 0 16px;
    min-height: 20px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        min-width: 110px;
        padding: 0;
    }
`;

export const StageRoot = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
    background-color: ${getColorByName('gray')};

    & > ${TopWrapper},
    & > ${BottomWrapper} {
        width: 100%;
        box-sizing: border-box;
    }
`;
