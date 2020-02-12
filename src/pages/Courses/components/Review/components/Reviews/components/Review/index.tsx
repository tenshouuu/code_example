import React, { FunctionComponent } from 'react';

import {
    StyledAvatarBlock,
    StyledLabel,
    StyledReview,
} from './styled';

export interface ReviewProps {
    name: string;
    img: string;
    title: string;
    score: string;
    description: string;
}

type Props = ReviewProps;

const Review: FunctionComponent<Props> = ({
    name,
    img,
    title,
    score,
    description,
    ...props
}) => (
    <StyledReview {...props}>
        <StyledAvatarBlock
            img={img}
            name={name}
            label={title}
        />
        <StyledLabel>
            <p>
                Математика:
                <span>{` ${score}`}</span>
            </p>
        </StyledLabel>
        <p>{description}</p>
    </StyledReview>
);

export default Review;
