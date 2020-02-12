import gql from 'graphql-tag';
import { Query } from '@client/apollo/schemaTypes';

export interface GetPayDataVariables {
    ids: string[];
}

export interface GetPayDataResponse {
    userCourses: Query['userCourses'];
    courses: Query['courses'];
    me: Query['me'];
}

export const getCourseSubscription = gql`fragment GetCourseSubscription on Query {
    userCourses(courseIds: $ids) {
        subscriptionExpiredAt
        course {
            id
        }
    }
}`;


export default gql`
    query getPayData($ids: [ID]) {
        ...GetCourseSubscription
        courses(page: 1, limit: 10, ids: $ids) {
            data {
                id
                title
                cost
                teacher {
                    id
                    avatar
                    name
                }
                subject {
                    slug
                    name
                    id
                }
            }
        }
    }
    ${getCourseSubscription}
`;
