import React from 'react';
import styled from 'styled-components';
import { getColorByName } from '@client/helpers';
import { ColorType } from '@client/helpers/theme';

type sizeType = 'small' | 'medium' | 'large'

interface SpinProps {
    size?: sizeType;
    color?: ColorType;
    [key: string]: any;
}

function getSizeValue() {
    return ({ size = 'medium' }) => {
        let val = '50px';
        switch (size) {
            case 'large':
                val = '70px';
                break;
            case 'small':
                val = '25px';
                break;
            case 'medium':
            default:
                break;
        }

        return val;
    };
}

const StyledSpin2 = styled.svg<SpinProps>`
    animation: rotate 2s linear infinite;
    width: ${getSizeValue()};
    height: ${getSizeValue()};

    & .path {
        stroke: ${({ color, ...props }) => getColorByName(color || 'white')(props)};
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }

        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
`;

export default function Spin({ color, size, ...props }: SpinProps) {
    return (
        <StyledSpin2
            size={size || 'medium'}
            color={color || 'white'}
            viewBox="0 0 50 50"
            {...props}
        >
            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
        </StyledSpin2>
    );
}
