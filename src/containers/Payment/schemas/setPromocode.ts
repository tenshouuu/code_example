import gql from 'graphql-tag';

export default gql`
    mutation setPromocode($code: String!) {
        usePromocode(code: $code)
    }
`;
