import React from 'react';
import { ScoreRoot } from './styled';

const Score = (props) => {
    const { value } = props;
    return (
        <ScoreRoot>
            {value}
            &nbsp;
            баллов
        </ScoreRoot>
    );
};


export default Score;
