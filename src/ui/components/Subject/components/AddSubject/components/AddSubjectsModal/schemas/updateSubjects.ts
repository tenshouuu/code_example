import gql from 'graphql-tag';

export default gql`
    mutation updateSubjects($subjects: [ID]!) {
        setUserSubjects(subjectIdArray: $subjects) {
            id
        }
    }
`;
