import gql from 'graphql-tag';

export default gql`
    query getModuleLessons($id: ID!) {
        module(id: $id) {
            id
            lessons {
                id
                title
                endedAt
                startedAt
                isCompleted
                score
                maxScore
                homeworkTemplate {
                    id
                    deadlineAt
                }
                webinar {
                    id
                }
            }
        }
    }
`;
