import gql from 'graphql-tag';

export default gql`
    mutation BuyCourseTestDrive($courseId: ID!, $email: String) {
        buyCourseTestDrive(courseId: $courseId, email: $email)
    }
`;
