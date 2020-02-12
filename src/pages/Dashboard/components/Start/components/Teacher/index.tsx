import React, { FunctionComponent, useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { scroller } from 'react-scroll';
import { useHistory } from 'react-router';
import { Maybe, Users } from '@client/apollo/schemaTypes';
import { theme } from '@client/helpers';
import FeaturesList from '@client/components/FeaturesList';
import {
    Wrapper,
    TeacherRoot,
    Info,
    Name,
    Description,
    About,
    StyledButton,
    Interview,
    Play,
    StyledLink,
    ScoreWrapper,
    Score,
    Label,
    TeacherWrapper,
    StyledTeacherImage,
    TeacherPreview,
    StarsWrapper,
    Star,
    DifferenceModalRoot,
} from './styled';

export interface TeacherProps {
    courseId: string;
    coursePrice: number;
    slug: string;
    score: number;
    data: Maybe<Users>;
}

type Props = TeacherProps;

const StarsArray = (new Array(5)).fill(1);

const Teacher: FunctionComponent<Props> = ({
    data,
    courseId,
    coursePrice,
    score,
    slug,
    ...props
}) => {
    const history = useHistory();
    const [isVisibleDifferenceModal, setVisibleDifferenceModal] = useState(false);
    const isMobile = useMediaQuery({
        query: `(max-width: ${theme.tokens.mediaWidths.mobile}px)`,
    });
    const onWatchWebinars = useCallback(() => {
        if (isMobile) {
            setVisibleDifferenceModal(true);
        } else {
            scroller.scrollTo('featuresList', {
                duration: 1500,
                delay: 100,
                smooth: true,
            });
        }
    }, [isMobile]);
    return data ? (
        <>
            <TeacherRoot {...props}>
                <Wrapper>
                    <Info>
                        <Name>{data.name}</Name>
                        <StarsWrapper title="Средняя оценка учеников о качестве вебинаров">
                            {StarsArray.map((_, i) => <Star color="purple" key={i} />)}
                        </StarsWrapper>
                        <Description>
                            {
                                data?.teacher?.description
                                || 'Преподаватель сдал ЕГЭ на 100 баллов.'
                                + ' Разработчик курса, наставник, эксперт ЕГЭ.'
                            }
                        </Description>
                        <About>
                            <StyledButton onClick={() => {
                                if (courseId && slug) {
                                    history.push({
                                        pathname: '/courses',
                                        state: {
                                            slug: slug || 'math',
                                        },
                                    });
                                }
                            }}
                            >
                                    Подробнее о курсе
                            </StyledButton>
                            <Interview>
                                <Play />
                                <div>
                                      Интервью с преподавателем
                                </div>
                            </Interview>
                        </About>
                        <StyledLink onClick={onWatchWebinars}>
                            Посмотреть вебинары
                        </StyledLink>
                    </Info>
                    <ScoreWrapper>
                        <Score>{score}</Score>
                        <Label>Средний балл учеников</Label>
                    </ScoreWrapper>
                    {data?.teacher?.dashboardImage
                        ? (
                            <TeacherWrapper>
                                <StyledTeacherImage src={data.teacher.dashboardImage} />
                            </TeacherWrapper>
                        )
                        : <TeacherPreview color="gray" />}
                </Wrapper>
            </TeacherRoot>
            <DifferenceModalRoot
                buttons={[]}
                isVisible={isVisibleDifferenceModal}
                onClose={() => setVisibleDifferenceModal(false)}
            >
                <FeaturesList
                    responsiveMode
                    courseId={courseId ?? ''}
                    price={coursePrice ?? 0}
                />
            </DifferenceModalRoot>
        </>
    )
        : <div />;
};

export default Teacher;
