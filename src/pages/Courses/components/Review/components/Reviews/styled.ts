import styled from 'styled-components';
import Slider from 'react-slick';

import { getColorByName, getMediaWidthByName } from '@client/helpers';

import { Review } from './components';
import { ReviewProps } from './components/Review';

export const StyledReview = styled(Review)<ReviewProps>``;

export const ReviewsRoot = styled.section`
    width: 100%;
    margin-top: 36px;
    margin-bottom: 44px;
    flex-direction: column;
    display: none;

    & > div {
        margin-top: 28px;
        display: flex;
        justify-content: space-between;
    }

    @media (min-width: ${getMediaWidthByName('desktop')}) {
        margin-top: 2.58vw;

        & > div {
            margin-top: 2vw;
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin: 28px -16px 24px;

        & > div {
            margin-top: 0;
        }

        & > div:last-child {
            display: none;
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(25% - 15px);

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 100%;

        & > ${StyledReview} {
            margin: 16px auto 36px;
            width: calc(100% - 10px);
        }
    }
`;

export const StyledSlider = styled(Slider)`
    display: none !important;
    width: 100%;
    max-width: 100%;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: block !important;

        & .slick-dots {
            bottom: 0;

            & > li > button {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: solid 2px ${getColorByName('gray')};
                transition: 0.3s;

                &:before {
                    content: initial;
                }

                & > * {
                    display: none;
                }
            }

            & > li.slick-active > button {
                background-color: ${getColorByName('gray')};
            }
        }
    }
`;
