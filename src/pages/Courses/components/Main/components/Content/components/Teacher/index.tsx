/* eslint-disable max-len */
import React, { FunctionComponent, useContext } from 'react';

import { Maybe, Users } from '@client/apollo/schemaTypes';
import { declOfNum } from '@client/helpers';
import { AccessCourseContext } from '@client/components/Payment/helpers/context';
import {
    TeacherRoot,
    Avatar,
    AvatarImage,
    AvatarWrapper,
    Star,
    StarsWrapper,
    Ege,
    Info,
    Name,
    StyledLinkButton,
} from './styled';

export interface TeacherProps {
    user: Maybe<Users>;
    score: number;
}

type Props = TeacherProps;

const StarsArray = (new Array(5)).fill(1);

const Teacher: FunctionComponent<Props> = ({
    user,
    score,
    ...props
}) => {
    const accessCourse = useContext(AccessCourseContext);
    return (
        <TeacherRoot isAccess={accessCourse} {...props}>
            <AvatarWrapper>
                <Avatar>
                    <AvatarImage src={user?.teacher?.dashboardImage ?? ''} alt="teacher" />
                </Avatar>
            </AvatarWrapper>
            <Info>
                <Name>{user?.name}</Name>
                <StarsWrapper title="Средняя оценка учеников о качестве вебинаров">
                    {StarsArray.map((_, i) => <Star color="purple" key={i} />)}
                </StarsWrapper>
                <Ege>
                    <p>
                        Преподаватель сдал ЕГЭ на&nbsp;
                        {user?.teacher?.egeScore || 100}
                        &nbsp;
                        {declOfNum(user?.teacher?.egeScore || 100, ['балл', 'балла', 'баллов'])}
                    </p>
                    <p>
                        {`${score} ${declOfNum(score, ['балл', 'балла', 'баллов'])} — средний балл учеников`}
                    </p>
                </Ege>
                {accessCourse ? <StyledLinkButton>Написать преподавателю</StyledLinkButton> : null}
            </Info>
        </TeacherRoot>
    );
};

export default Teacher;
