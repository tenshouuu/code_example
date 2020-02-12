import styled, { css, FlattenInterpolation } from 'styled-components';
import { Link } from 'react-router-dom';

import Locky from '@client/pages/Courses/components/Main/components/Content/components/Locky';
import { Button, Subject } from '@client/ui/components';
import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName,
    getShadowByName,
} from '@client/helpers';

export const StyledLocky = styled(Locky)`
    position: absolute;
    background-color: ${getColorByName('gray')};

    height: 32px;
    width: 32px;
    right: -12px;
    top: -12px;

    & > i {
        font-size: 12px;
    }
`;
export const StyledLink = styled(Link)``;
export const StyledSubject = styled(Subject)`
    width: 100%;
    padding: 18px 20px;
    height: auto;
    border-radius: 6px 6px 0 0;
    text-align: left;
    box-shadow: ${getShadowByName('depth4')};
    justify-content: flex-start;

    & > h4 {
        ${createTypographyStyleByName('paragraph1')};
        font-family: ${getFamilyByName('medium')};
    }

    & > *:first-child,
    & > *:nth-child(2) {
        display: none;
    }
`;


export const StyledButton = styled(Button)`
    width: 100%;
    display: block;
    position: relative;
`;

export const DeadItem = styled.div`
    margin-bottom: 16px;

    & > p:first-child {
        ${createTypographyStyleByName('header5')};
        color: ${getColorByName('darkBlue')};
        margin-bottom: 4px;
    }

    & > p:last-child {
        ${createTypographyStyleByName('paragraph3')};
        color: ${getColorByName('darkGray')};
    }
`;

function renderDisabledDeadlinesStyles() {
    return ({ disabled }): FlattenInterpolation<any> => (disabled ? css`
        & > ${DeadItem} > p {
            color: ${getColorByName('darkGray')};
        }

        & > ${StyledButton} {
            pointer-events: none;
            opacity: 0.6;
        }
    ` : css``);
}

export const Deadlines = styled.div<{ disabled: boolean }>`
    flex: 1;
    padding: 14px 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: ${getShadowByName('depth4')};
    background-color: ${getColorByName('white')};

    ${renderDisabledDeadlinesStyles}
`;

function renderDisabledFooterStyles() {
    return ({ disabled }): FlattenInterpolation<any> => (disabled ? css`
        background-color: ${getColorByName('darkGray')};
        color: ${getColorByName('white')};
    ` : css``);
}

export const Footer = styled.div<{ disabled: boolean }>`
    padding: 16px 20px 20px;
    border-radius: 0 0 6px 6px;
    background-color: ${getColorByName('gray')};
    color: ${getColorByName('darkGray')};
    box-shadow: ${getShadowByName('depth4')};

    & > p {
        ${createTypographyStyleByName('paragraph3')};
        font-family: ${getFamilyByName('medium')};
    }

    & > h5 {
        ${createTypographyStyleByName('header4')};
    }

    ${renderDisabledFooterStyles}
`;
