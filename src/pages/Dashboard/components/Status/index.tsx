import React, { FunctionComponent } from 'react';
import krevetko from '@client/assets/img/crevetko_level.png';
import { GamificationProgress } from '@client/apollo/schemaTypes';
import {
    Bar,
    Score,
    TodoList,
} from './components';
import {
    StatusRoot,
    Image,
    Title,
    StatusName,
    NextLevelDescription,
    Badge,
    Gap,
    Ad,
    PurpleBack,
} from './styled';

export interface StatusProps {
    progress: GamificationProgress;
}

const Status: FunctionComponent<StatusProps> = ({ progress: userProgress, ...props }) => {
    const {
        experience,
        levelLabel,
        progress,
        nextLevelLabel,
    } = userProgress;
    return (
        <StatusRoot {...props}>
            <PurpleBack />
            <Image src={krevetko} alt="" />
            <Title>Твой уровень</Title>
            <StatusName>
                «
                {levelLabel}
                »
            </StatusName>
            <Bar colorBar="pink" value={progress} />
            <NextLevelDescription>
                следующий уровень «
                {nextLevelLabel}
                »
            </NextLevelDescription>
            <Score value={experience} />
            <Ad>
                чтобы учавствовать в Лиге купите курс
            </Ad>
            <Badge color="bronze">Бронзовая лига</Badge>
            <Gap />
            <TodoList />
        </StatusRoot>
    );
};


export default Status;
