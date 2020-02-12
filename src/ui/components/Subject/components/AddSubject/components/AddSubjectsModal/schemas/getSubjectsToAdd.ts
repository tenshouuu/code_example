import gql from 'graphql-tag';

export default gql`
    query getSubjectsToAdd {
        me {
            id
            subjects {
                id
                slug
                courses {
                    id
                }
            }
        }
        subjects {
            id
            slug
            courses {
                id
            }
        }
    }
`;
