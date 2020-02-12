import gql from 'graphql-tag';

export default gql`
    mutation saveRecallPhoneNumber($phone: String!) {
        createRecallRequest(phone: $phone) {
            id
            phone
        }
    }
`;
