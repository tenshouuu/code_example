import React, { FunctionComponent } from 'react';
import { Experience } from '@client/apollo/schemaTypes';
import {
    ItemRoot,
    Text,
    Rating,
} from './styled';

export interface OwnProps {
    score: Experience;
}

type Props = OwnProps;

const Item: FunctionComponent<Props> = (props) => {
    const {
        score,
    } = props;
    return (
        <ItemRoot>
            <Text>{score.title}</Text>
            <Rating>
                {score.amount}
                &nbsp;
                баллов
            </Rating>
        </ItemRoot>
    );
};

export default Item;
