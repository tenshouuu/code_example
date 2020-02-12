import React, { FunctionComponent, useEffect, useState } from 'react';
import { withApollo, WithApolloClient } from 'react-apollo';
import {
    Experience,
    Maybe,
} from '@client/apollo/schemaTypes';
import { getExperienceTypes } from '@client/pages/Onboard/components/Content/components/Finish/components/Score/shemas';
import { Item } from './components';
import {
    TodoListRoot,
    Title,
} from './styled';

interface Item {
    score: Experience;
}

export interface OwnProps {
    list?: Item[];
}

type Props = OwnProps;

const features = [
    {
        text: 'Сделай что-то',
        rating: 15,
    },
    {
        text: 'Сделай что-то',
        rating: 15,
    },
    {
        text: 'Сделай что-то',
        rating: 15,
    },
];

const TodoList: FunctionComponent<WithApolloClient<Props>> = (props) => {
    const {
        list = features,
        client,
    } = props;
    const [scores, setScores] = useState<Maybe<Experience[]>>(null);
    const fetchScore = () => {
        client.query({
            query: getExperienceTypes,
        }).then(({ data }) => {
            if (data.experienceTypes && data.experienceTypes.data) {
                setScores(data.experienceTypes.data);
            }
        });
    };

    useEffect(fetchScore, []);
    return (
        <TodoListRoot>
            <Title>Твои действия</Title>
            {scores ? scores.map((score, i) => <Item key={i} score={score} />) : ''}
            {/* <LinkButton>Больше статистики</LinkButton> */}
        </TodoListRoot>
    );
};

export default withApollo(TodoList);
