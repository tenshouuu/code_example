import gql from 'graphql-tag';
import { ModulePagination } from '@client/apollo/schemaTypes';

export interface GetFuryModules {
    modules: ModulePagination;
}

export default gql`
    query ($courseId: ID!) {
        course(id: $courseId) {
            id
            introductoryLesson {
                id
                title
                startedAt
                webinar {
                    id
                }
            }
        }
        modules(courseId: $courseId, page: 1, limit: 40) {
            data {
                id
                title
                description
                startedAt
                endedAt
                test {
                    id
                    userTests {
                        id
                        status
                    }
                }
                lessons {
                    id
                    title
                    startedAt
                    endedAt
                    maxScore
                    homeworkTemplate {
                        id
                    }
                }
            }
        }
    }
`;
