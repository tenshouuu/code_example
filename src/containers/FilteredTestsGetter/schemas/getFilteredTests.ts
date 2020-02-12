import gql from 'graphql-tag';

import fragments from '@client/apollo/fragments';

export default gql`
    query getFilteredTests{ 
        filteredTests {
            id
            title
            subject {
                id
                name
            }
            questions {
                ...QuestionsPageTests
            }
            __typename
        }
    }
    ${fragments.questionsPageTests}
`;
