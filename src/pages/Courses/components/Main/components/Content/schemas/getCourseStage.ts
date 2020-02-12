import gql from 'graphql-tag';
import { getCourseStage } from '@client/pages/Courses/components/Main/schemas/getPrivateCourseData';


export default gql`
    query ($courseId: ID!) {
        ...GetCourseStage
    }
    ${getCourseStage}
`;
