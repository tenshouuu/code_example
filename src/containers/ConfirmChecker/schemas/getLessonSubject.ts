import gql from 'graphql-tag';

import fragments from '@client/apollo/fragments';
import { Query } from '@client/apollo/schemaTypes';

export interface GetLessonSubjectResponse {
    lesson: Query['lesson'];
}

export default gql`
    query getLessonSubject($id: ID!) {
        lesson(id: $id) {
            id
            subject {
                ...SubjectInfo
            }
        }
    }
    ${fragments.subjectInfo}
`;
