import styled, { css } from 'styled-components';
import { getColorByName, getMediaWidthByName } from '@client/helpers';

export const Plus = styled.div`
    &:after {
        content: "";
        width: 100%;
        height: 2px;
    }

    &:before {
        position: absolute;
        left: calc(50% - 1px);
        content: "";
        width: 2px;
        height: 100%;
    }
`;

export const Minus = styled.div`
    &:after {
        content: "";
        width: 100%;
        height: 2px;
    }
`;

function getDisabledStyles() {
    return ({ disabled }) => (disabled ? css`
            pointer-events: none;
            opacity: 0.5;
        ` : '');
}

export const CounterRoot = styled.div<{ disabled: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    border-radius: 48px;
    padding: 0 20px;
    border: 2px solid ${getColorByName('gray')};
    min-width: 110px;
    box-sizing: border-box;
    ${getDisabledStyles};

    & > ${Plus},
    & > ${Minus} {
        user-select: none;
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        width: 12px;
        min-width: 12px;
        height: 12px;

        &:hover:after,
        &:hover:before {
            transition: 0.3s;
            background-color: ${getColorByName('darkGray')};
        }

        &:after,
        &:before {
            background-color: ${getColorByName('gray')};
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        min-width: 90px;
        padding: 0 12px;
    }
`;
