import React, { FunctionComponent, ReactElement } from 'react';

import {
    StyledTeacher,
    StyledAvatar,
    Informer,
    Persona,
    PersonaInfo,
    Score,
    ScoreFeature,
    StyledSubjectText,
} from './styled';

export interface TeacherProps {
    name: string;
    avatar: string | null;
}

const features = [
    {
        score: '82 балла',
        label: 'Средняя оценка учеников после прохождения курса обучения',
    },
    {
        score: '36',
        label: 'домашних заданий',
    },
    {
        score: '36',
        label: 'вебинаров',
    },
    {
        score: '24',
        label: 'теста',
    },
];

function renderList() {
    const list1: ReactElement[] = [];
    const list2: ReactElement[] = [];

    features.forEach(({ score, label }, i) => {
        if (i % 2 === 0) {
            list1.push(
                <ScoreFeature key={i}>
                    <h2>{score}</h2>
                    <p>{label}</p>
                </ScoreFeature>,
            );
        } else {
            list2.push(
                <ScoreFeature key={i}>
                    <h2>{score}</h2>
                    <p>{label}</p>
                </ScoreFeature>,
            );
        }
    });

    return (
        <>
            <div>{list1}</div>
            <div>{list2}</div>
        </>
    );
}

const Teacher: FunctionComponent<TeacherProps> = ({
    name,
    avatar,
}) => (
    <StyledTeacher>
        <Informer>
            <Persona>
                <PersonaInfo>
                    <StyledAvatar img={avatar || ''} />
                    <div>
                        <p>Преподаватель</p>
                        <h4>{name}</h4>
                        <h5>
                            <StyledSubjectText />
                            : 94 балла
                        </h5>
                    </div>
                </PersonaInfo>
                <p>
                    Разработчик курса, наставник,
                    эксперт ЕГЭ
                </p>
            </Persona>
            <Score>
                <>
                    {renderList()}
                    {features.map(({ score, label }, i) => (
                        <ScoreFeature key={i}>
                            <h2>{score}</h2>
                            <p>{label}</p>
                        </ScoreFeature>
                    ))}
                </>
            </Score>
        </Informer>
        <StyledAvatar img={avatar || ''} />
    </StyledTeacher>
);

export default Teacher;
