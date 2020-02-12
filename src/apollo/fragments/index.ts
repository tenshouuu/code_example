import gql from 'graphql-tag';

const fragments = {
    questionsPageTests: gql`
        fragment QuestionsPageTests on QuestionType {
            id
            text
            answers {
                id
                text
                isTruly
            }
        }
    `,
    subjectInfo: gql`
        fragment SubjectInfo on Subject {
            id
            slug
            name
        }
    `,
    courseInfo: gql`
        fragment CourseInfo on Course {
            id
            title
            description
        }
    `,
    userInfo: gql`
        fragment UserInfo on Users {
            id
            name
            avatar
        }
    `,
    teacherInfo: gql`
        fragment TeacherInfo on Teacher {
            id
            egeScore
            description
            dashboardImage
        }
    `,
    lessonInfo: gql`
        fragment LessonInfo on Lesson {
            id
            title
            startedAt
            endedAt
            plan
            duration
        }
    `,
    webinarInfo: gql`
        fragment WebinarInfo on Webinar {
            id
            clickmeetingId
            embedRoomUrl
            lessonId
            accessType
            name
        }
    `,
    tokenInfo: gql`
        fragment TokenInfo on Token {
            accessToken
            expiresIn
            tokenType
        }
    `,
    userTestInfo: gql`
        fragment UserTestInfo on UserTest {
            id
            createdAt
            endedAt
            status
            score
        }
    `,
    userTestQuestionInfo: gql`
        fragment UserTestQuestionInfo on UserTestQuestion {
            id,
            isTruly,
            question {
                id,
                text,
                answers {
                    id
                    text
                }
            },
            trulyAnswers {
                id
                text
                isTruly
            }
            userTestAnswers {
                id
                value
            }
        }
    `,
};

export default fragments;
