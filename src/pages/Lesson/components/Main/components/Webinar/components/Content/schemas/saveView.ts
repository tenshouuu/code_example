import gql from 'graphql-tag';

export default gql`
    mutation saveView($webinarId: ID!) {
        viewWebinar(webinarId: $webinarId)
    }
`;
