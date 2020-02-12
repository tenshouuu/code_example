import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
    createTypographyStyleByName, getColorByName, getMediaWidthByName, getShadowByName,
} from '@client/helpers';

/* eslint-disable max-len */
const StyledContainer = styled.article<{ isPrice: boolean }>`
    display: flex;
    flex-direction: column;
    padding: 32px 40px;
    border-radius: 6px;
    box-sizing: border-box;
    width: ${({ isPrice }) => (isPrice ? '34%' : '26%')};
    max-width: ${({ isPrice }) => (isPrice ? '344px' : '264px')};
    color: ${({ isPrice, ...props }) => getColorByName(isPrice ? 'white' : 'darkBlue')(props)};
    background-color: ${({ isPrice, ...props }) => getColorByName(isPrice ? 'purple' : 'white')(props)};
    text-align: center;
    box-shadow: ${({ isPrice, ...props }) => (!isPrice ? getShadowByName('depth4')(props) : 'initial')};

    &:not(:last-child) {
        margin-right: 32px;
    }

    & > h4 {
        ${createTypographyStyleByName('header4')};
        margin-bottom: 12px;
    }

    & > p {
        ${createTypographyStyleByName('paragraph3')};
        margin-bottom: 32px;
    }

    @media (max-width: ${getMediaWidthByName('semiDesktop')}) {
        padding: 2vw 2.4vw;

        &:not(:last-child) {
            margin-right: 24px;
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 100% !important;
        margin-right: 0 !important;
        max-width: 100%;
        margin-bottom: 10px;
        padding: 30px 32px;
    }
`;

const LinkedButton = styled(Link)`
    display: inline-block;
    flex: 1;

    & > * {
        width: 100%;
    }
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    & > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: left;
        margin-right: 16px;

        & > h2 {
            width: max-content;
            ${createTypographyStyleByName('header3')}
        }

        & > p {
            ${createTypographyStyleByName('header5')}
        }
    }
`;

export {
    StyledContainer,
    Info,
    LinkedButton,
};
