import styled, { css, FlattenInterpolation } from 'styled-components';
import {
    getColorByName,
    getMediaWidthByName,
    createTypographyStyleByName, getFamilyByName,
} from '@client/helpers';
import { NavLink, Link } from 'react-router-dom';
import { ColorType } from '@client/helpers/theme';
import { roundCorner } from './helpers';

/* eslint-disable max-len */
export const MenuRoot = styled.nav`
    grid-area: nav;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: ${getColorByName('white')};
    background-color: ${getColorByName('purple')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        min-height: auto;
        overflow-y: hidden;
    }
`;

export const LinkList = styled.ul`
    padding: 24px 0;
    position: sticky;
    overflow-x: hidden;
    top: 0;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: flex;
        flex-wrap: wrap;
        padding: 12px 0 24px 0;
    }
`;

export const StyledLink = styled(Link)`
    display: none;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 0 24px;
        display: flex;
        flex-flow: column;
        margin-top: 24px;
    }
`;

export const IconContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: 1 / 1;
    grid-column: 2 / 2;
    width: 100%;
    height: 40px;
    border-radius: 50%;
    flex-shrink: 0;
    color: ${getColorByName('purple')};
    font-size: 16px;
    background-color: ${getColorByName('white')};
`;

export const NavHighlight = styled.div`
    --oversize: 8px;

    position: relative;
    grid-column: 2 / span 2;
    border-radius: 40px 0 0 40px;
    margin:
        0
        calc(-1 * var(--oversize))
        calc(-1 * var(--oversize));
    width: calc(100% + var(--oversize));
    height: 100%;
    opacity: 0;
    grid-row: 1 / 1;
    transition: opacity 0.25s ease;
    background-color: currentColor;

    &::before, &::after {
        content: '';
        display: block;
        position: absolute;
        ${roundCorner};
    }

    &::before {
        bottom: 100%;
    }

    &::after {
        top: 100%;
        transform: scaleY(-1);
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: none;
    }
`;


export const Locker = styled.div`
    background-color: ${getColorByName('darkBlue')};
    color: ${getColorByName('white')};
    position: absolute;
    left: -12px;
    top: -6px;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    font-size: 12px;
`;


export const Wrapper = styled.div`
    width: 100%;
    display: inline-grid;
    grid-template-columns: 1fr 40px 1fr;
    grid-template-rows: min-content min-content;
    grid-row-gap: 6px;
`;

const getMobileStyles = () => ({ ismobile }): FlattenInterpolation<any> => (
    ismobile
        ? css`
            @media (min-width: ${getMediaWidthByName('mobile')}) {
                display: none;
            }
        `
        : css``
);

const getDisabledStyles = () => ({ disabled }): FlattenInterpolation<any> => (
    disabled
        ? css`
            pointer-events: none;

            @media (min-width: ${getMediaWidthByName('mobile')}) {
                & > ${Wrapper} {
                    pointer-events: initial !important;
                }
            }
            
            & > ${Wrapper} > ${IconContainer} {
                background-color: ${getColorByName('white', 0.4)};

                & > ${Locker} {
                    visibility: visible;
                }
            }
        `
        : css`
            & > ${Wrapper} > ${IconContainer} > ${Locker} {
                visibility: hidden;
            }
        `
);


export const NavItem = styled(NavLink)<{ background: ColorType; ismobile: number; disabled: boolean }>`
    width: 100%;
    display: block;
    color: ${getColorByName('white')};
    position: relative;

    ${getDisabledStyles};
    ${getMobileStyles};

    & + & {
        margin-top: 14px;
    }

    &.active {
        ${NavHighlight} {
            color: ${({ background }) => getColorByName(background)};
            opacity: 1;
        }

        ${IconContainer} {
            background-color: ${({ background }) => getColorByName(background)};
            color: ${getColorByName('darkGray')};
        }
    }

    & span {
        grid-row: 2 / 2;
        grid-column: 2 / 2;
        justify-self: center;
        ${createTypographyStyleByName('paragraph4')};
        font-family: ${getFamilyByName('medium')};
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 33.3%;
        margin-top: 20px;
    }
`;

/* eslint-enable max-len */

export const PhoneLink = styled.a`
    display: none;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: block;
        text-align: center;
        margin-top: 24px;
        color: ${getColorByName('white')};
    }
`;
