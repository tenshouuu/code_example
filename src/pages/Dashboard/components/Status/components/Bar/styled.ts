import styled from 'styled-components';
import { getColorByName } from '@client/helpers';
import { BarProps } from './index';


export const BarRoot = styled.div<BarProps>`
    position: relative;
    margin-top: 4px;
    grid-area: bar;
    width: 100%;
    height: 25px;
    line-height: 25px;
    border-radius: 13px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.35);
    color: ${getColorByName('white')};

    & > div {
        height: 100%;
        transition: 0.5s;
        position: relative;
        width: ${({ value = 0 }) => value}%;
        background-color: ${({ colorBar, ...props }) => getColorByName(colorBar)(props)};
    }

    & > div > p {
        text-align: right;
        margin: 0 6px;
    }
`;
