import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Line, { LineProps } from '../Line';

export interface LinesProps {
    rows: number;
}

type Props = LinesProps & LineProps;

const StyledLine = styled(Line)<LineProps>`
    & + & {
        margin-top: 16px;
    }

    & + &:last-child {
        width: 50%;
    }
`;

const StyledLines = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Lines: FunctionComponent<Props> = ({ rows = 4, active, ...props }) => (
    <StyledLines
        {...props}
    >
        {Array(rows).fill(rows).map((e, i) => <StyledLine active={active} key={`skeleton${i}`} />)}
    </StyledLines>
);

export default Lines;
