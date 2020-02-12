import gql from 'graphql-tag';

import fragments from '@client/apollo/fragments';

export default gql`
    query getFreeAboutWebinars($slug: SubjectsEnum!) {
        dashboardStartWebinarsV2(slug: $slug) {
                ...LessonInfo
                isCompleted
                teacher {
                    ...UserInfo
                }
                webinar {
                    id
                    name
                    preview
                    clickmeetingId
                }
        }
    }
    ${fragments.userInfo}
    ${fragments.lessonInfo}
`;
