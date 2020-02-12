import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router';
import {
    StageRoot,
    TopWrapper,
    Title,
    Label,
    BottomWrapper,
    StyledLink,
    StyledLinkButton,
    StyledLocky,
} from './styled';

export interface StageProps {
    isLocked: boolean;
    lessonId?: string;
    title: string;
}

type Props = StageProps;

const Stage: FunctionComponent<Props> = ({
    isLocked = true,
    lessonId = '',
    title = '',
    ...props
}) => {
    const history = useHistory();
    return (
        <StageRoot {...props}>
            <StyledLocky isLocked={isLocked} />
            <TopWrapper>
                <Label>{isLocked ? 'Следующий этап' : 'Текущий этап'}</Label>
                <p>Занятие</p>
                <Title>{title}</Title>
                {lessonId ? (
                    <StyledLinkButton onClick={() => history.push(`/lesson/${lessonId}`)}>
                        Посмотреть вебинар
                    </StyledLinkButton>
                ) : ''}
            </TopWrapper>
        </StageRoot>
    );
};

export default Stage;
