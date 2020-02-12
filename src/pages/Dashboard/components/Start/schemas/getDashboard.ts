import gql from 'graphql-tag';

import fragments from '@client/apollo/fragments';

export default gql`
    query getDashboardStart {
        me {
            id
            courses {
                id
                subject {
                    id
                    slug
                }
            }
            subjects {
                ...SubjectInfo
                courses {
                    id
                }
            }
        }
    }
    ${fragments.subjectInfo}
`;
