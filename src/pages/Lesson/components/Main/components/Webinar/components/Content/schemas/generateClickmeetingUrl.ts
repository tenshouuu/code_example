import gql from 'graphql-tag';

export default gql`
    mutation generateClickmeetingUrl($id: ID!) {
        generateUserAutoLoginUrl(webinarId: $id)
    }
`;
