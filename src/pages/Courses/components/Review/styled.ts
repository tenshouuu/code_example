import styled from 'styled-components';
import { getColorByName, getMediaWidthByName } from '@client/helpers';

export const CourseReviewRoot = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    background-color: ${getColorByName('white')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 20px 20px 40px;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
    }
`;

export const SkeletonWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: ${getColorByName('white')};
`;
