import gql from 'graphql-tag';

export default gql`
    query getCourseSubscriptionForLesson($courseIds: [ID]) {
        userCourses(courseIds: $courseIds) {
            subscriptionExpiredAt
        }
    }
`;
