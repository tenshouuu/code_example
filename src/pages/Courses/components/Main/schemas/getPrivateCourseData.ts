import fragments from '@client/apollo/fragments';
import gql from 'graphql-tag';
import { Query } from '@client/apollo/schemaTypes';

export const getCourseStage = gql`fragment GetCourseStage on Query {
        courseStage(courseId: $courseId) {
            currentLesson {
                ...LessonInfo
                module {
                    id
                }
                webinar {
                    id
                }
            }
            nextLesson {
                ...LessonInfo
            }
        }
    }
    ${fragments.lessonInfo}
`;

export const getPrivateCourse = gql`fragment GetPrivateCourse on Query {
    course(id: $courseId) {
        id
        cost
        title
        description
        averageScore
        counters {
            score
        }
        teacher {
            ...UserInfo
            teacher {
                ...TeacherInfo
            }
        }
    }
}
${fragments.userInfo}
${fragments.teacherInfo}
`;

export const getUserCourses = gql`fragment GetUserCourses on Query {
    userCourses(courseIds: $courseIds) {
        health
        subscriptionExpiredAt
        subscriptionStartedAt
    }
}
`;

export interface GetPrivateCourseDataResponse {
    userCourses: Query['userCourses'];
    courseStage: Query['courseStage'];
    course: Query['course'];
}

export default gql`
    query getPrivateCourseData($courseIds: [ID], $courseId: ID!) {
        ...GetUserCourses
        ...GetCourseStage
        ...GetPrivateCourse
    }
    ${getPrivateCourse}
    ${getCourseStage}
    ${getUserCourses}
`;
