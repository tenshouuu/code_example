import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export interface LineProps {
    active: boolean;
}

type Props = LineProps;

const StyledLine = styled.div<LineProps>`
    height: 20px;
    border-radius: 20px;
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    animation: skeleton-loading 1.4s ease infinite;

    @-webkit-keyframes skeleton-loading {
        0% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0 50%;
        }
    }

    @keyframes skeleton-loading {
        0% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0 50%;
        }
    }
`;

// eslint-disable-next-line max-len
const Line: FunctionComponent<Props> = ({ active, ...props }) => <StyledLine active={active} {...props} />;

export default Line;
