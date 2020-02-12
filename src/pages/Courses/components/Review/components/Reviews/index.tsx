import React, { FunctionComponent } from 'react';

import Title from '../Title';
import {
    ReviewsRoot,
    Wrapper,
    StyledReview,
    StyledSlider,
} from './styled';

const reviews = (new Array(4)).fill(
    {
        img: '',
        name: 'Оксана Марченко',
        title: 'Годовой курс обучения',
        score: '94 балл',
        description: `
            Повседневная практика показывает, что 
            внедрение современных методик однозначно 
            определяет каждого участника как способного 
            принимать собственные решения. Вне зависимости 
            от окружающих обстоятельств и общественного 
            настроения в социуме.
        `,
    },
);

const settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: '20px',
    slidesToShow: 1,
    speed: 500,
    slidesPerRow: 1,
};

const Reviews: FunctionComponent = () => {
    const list = reviews.map((reviewProps, i) => (
        <Wrapper key={i}>
            <StyledReview {...reviewProps} />
        </Wrapper>
    ));
    return (
        <ReviewsRoot>
            <Title>Отзывы учеников</Title>
            <StyledSlider {...settings}>
                {list}
            </StyledSlider>
            <div>
                {list}
            </div>
        </ReviewsRoot>
    );
};

export default Reviews;
