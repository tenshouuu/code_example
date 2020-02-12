import gql from 'graphql-tag';

import fragments from '@client/apollo/fragments';
import { Query } from '@client/apollo/schemaTypes';

export interface GetTabContentResponseType {
    course: Query['course'];
    dashboardStartWebinarsV2: Query['dashboardStartWebinarsV2'];
}

export const getCourseFragment = gql`fragment GetCourse on Query {
    course(id: $id) {
        cost
        startsAt
        ...CourseInfo
        lessons {
            id
        }
        counters {
            score
        }
        teacher {
            ...UserInfo
            teacher {
                id
                egeScore
                description
                dashboardImage
            }
        }
    }
}
${fragments.courseInfo}
${fragments.userInfo}
`;

export const getFreeDashboardStartWebinarsV2Fragment = gql`
    fragment GetFreeDashboardStartWebinarsV2 on Query {
        dashboardStartWebinarsV2(slug: $slug) {
            ...LessonInfo
            isCompleted
            teacher {
                ...UserInfo
                teacher {
                    id
                    egeScore
                    description
                }
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


export default gql`
    query getTabContent($id: ID!, $slug: SubjectsEnum!) {
        ...GetCourse
        ...GetFreeDashboardStartWebinarsV2
    }
    ${getCourseFragment}
    ${getFreeDashboardStartWebinarsV2Fragment}
`;
