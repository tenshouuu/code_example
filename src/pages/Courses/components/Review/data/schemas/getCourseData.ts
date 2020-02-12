import fragments from '@client/apollo/fragments';
import gql from 'graphql-tag';

export default gql`
    query getCourseData($id: ID!) {
        course(id: $id) {
            id
            title
            description
            cost
            yearCost
            startsAt
            endsAt
            teacher {
                ...UserInfo
            }
            modules {
                id
                title
                description
                startedAt
                endedAt
                lessons {
                    ...LessonInfo
                    webinar {
                        id
                        name
                        preview
                        clickmeetingId
                    }
                }
            }
        }
    }
    ${fragments.userInfo}
    ${fragments.lessonInfo}
`;
