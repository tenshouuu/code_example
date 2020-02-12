import gql from 'graphql-tag';

export const getPromocodeFragment = gql`fragment GetPromocode on Query {
    userActivePromocode {
        id
        code
        value
        course {
            id
        }
    }
}`;

export default gql`
    query getActivePromocode {
        ...GetPromocode
    }
    ${getPromocodeFragment}
`;
