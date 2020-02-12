import styled from 'styled-components';
import {
    createTypographyStyleByName,
    getColorByName, getFamilyByName,
    getMediaWidthByName,
} from '@client/helpers';

export const Selector = styled.div`
    position: relative;
    transition: 0.3s;
    color: ${getColorByName('white')};
    background-color: ${getColorByName('yellow')};
`;

export const Options = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`;

export const Option = styled.div`
    color: ${getColorByName('darkBlue')};
    cursor: pointer;
`;

export const SelectRoot = styled.div<{ index: number }>`
    width: 100%;
    position: relative;
    background-color: ${getColorByName('white')};
    margin: 14px 0 16px;
    height: 48px;
    border-radius: 24px;
    overflow: hidden;

    ${Selector} {
        margin-left: calc(${({ index }) => index} * (100% / 3));
    }

    ${Selector},
    ${Option} {
        display: flex;
        justify-content: center;
        width: calc(100% / 3);
        ${createTypographyStyleByName('header5')};
        border-radius: 24px;
        line-height: 48px;
    }

    @media (min-width: ${getMediaWidthByName('semiLight')}) {
        height: 56px;
        border-radius: 28px;

        ${Selector},
        ${Option} {
            ${createTypographyStyleByName('paragraph1')};
            font-family: ${getFamilyByName('medium')};
            border-radius: 28px;
            line-height: 56px;
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        max-width: 240px;
    }
`;
