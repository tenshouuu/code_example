import gql from 'graphql-tag';
import { getUserCourses } from '@client/pages/Courses/components/Main/schemas/getPrivateCourseData';

export default gql`
    query getUserSubscriptionForModuleLessons($courseIds: [ID]) {
        ...GetUserCourses
    }
    ${getUserCourses}
`;
