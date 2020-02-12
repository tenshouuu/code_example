import styled from 'styled-components';
import { createTypographyStyleByName, getColorByName, getMediaWidthByName } from '@client/helpers';

import { Option } from './components';

export const SelectRoot = styled.div`
    display: flex;
    align-items: center;
    min-width: 216px;
`;

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    height: 48px;
    background-color: ${getColorByName('lightGray')};
    box-shadow: inset 0 0 0 2px ${getColorByName('gray')};
    border-radius: 50px;
    box-sizing: border-box;
`;

export const StyledOption = styled(Option)`
    position: relative;
    padding: 0 16px;
    min-width: 48px;
    max-width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: min-content;
    height: 100%;
    white-space: nowrap;
    cursor: pointer;
    ${createTypographyStyleByName('header5')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 0 14px;
    }
`;

// eslint-disable-next-line no-unexpected-multiline
export const Selector = styled.div<{
    left: string;
    width: string;
}>`
    transition: 0.3s;
    width: ${({ width }) => width};
    position: absolute;
    height: 48px;
    top: 0;
    left: ${({ left }) => left};
    background-color: ${getColorByName('purple')};
    border-radius: 52px;
`;

// !!! Using also in Informer component
export const Arrow = styled.div`
    width: 0;
    height: 0;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-bottom: 8px solid ${getColorByName('purple')};
`;

export const StyledArrow = styled(Arrow)<{ show: boolean }>`
    position: absolute;
    bottom: -40px;
    left: calc(50% - 16px);
    ${({ show }) => (show ? '' : 'display: none')};
`;

export const Oval = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        & > ${StyledArrow} {
            display: none;
        }
    }
`;


export const OptionText = styled.span<{ selected: boolean }>`
    transition: 0.3s;
    color: ${({ selected }) => getColorByName(selected ? 'white' : 'darkGray')};

    &:hover {
        color: ${({ selected }) => getColorByName(selected ? 'white' : 'darkBlue')};
    }
`;

export const Label = styled.p`
    margin-left: 8px;
    color: ${getColorByName('darkGray')};
    ${createTypographyStyleByName('header5')};
`;
