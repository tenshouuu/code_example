import gql from 'graphql-tag';

export default gql`
    query getCoursesSubject($slug: SubjectsEnum!) {
        subject(slug: $slug) {
            id
            courses {
                id
                cost
                title
                description
                counters {
                    score
                }
            }
        }
    }
`;
