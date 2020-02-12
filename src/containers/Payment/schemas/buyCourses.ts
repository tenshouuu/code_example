import gql from 'graphql-tag';

export default gql`
    mutation BuyCourses($courses: String!, $email: String) {
        buyCourse(courses: $courses, email: $email)
    }
`;
