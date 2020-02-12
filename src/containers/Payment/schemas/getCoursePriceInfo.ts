import gql from 'graphql-tag';
import { getPromocodeFragment } from './getActivePromocode';

export default gql`
    query getCoursePriceInfo($ids: [ID]) {
        courses(page: 1, limit: 10, ids: $ids) {
            data {
                id
                cost
            }
        }
        ...GetPromocode
    }
    ${getPromocodeFragment}
`;
