import gql from 'graphql-tag';
import fragments from '@client/apollo/fragments';

export default gql`
    query getWebinarInfo($id: ID!) {
        lesson(id: $id) {
            id
            plan
            isPaid
            title
            startedAt
            endedAt
            duration
            teacher {
                ...UserInfo
                teacher {
                    id
                    egeScore
                    description
                    dashboardImage
                }
            }
            webinar {
                data
                preview
                ...WebinarInfo
            }
            subject {
                ...SubjectInfo
            }
            course {
                id
                id
                cost
                title
                description
                counters {
                    score
                }
                subject {
                    ...SubjectInfo
                }
            }
            module {
                id
                course {
                    id
                    subject {
                        ...SubjectInfo
                    }
                }
            }
            homeworkTemplate {
                id
            }
        }
    }
    ${fragments.subjectInfo}
    ${fragments.userInfo}
    ${fragments.webinarInfo}
`;
