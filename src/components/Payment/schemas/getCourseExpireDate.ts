import gql from 'graphql-tag';

export default gql`
    query getCourseExpireDate($ids: [ID]) {
        userCourses(courseIds: $ids) {
            subscriptionExpiredAt
        }
    }
`;
