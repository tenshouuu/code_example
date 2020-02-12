import gql from 'graphql-tag';
import fragments from '@client/apollo/fragments';
import { getPromocodeFragment } from './getActivePromocode';

export default gql`
    query getUserPaymentInfo {
        me {
            id
            email
            courses {
                id
            }
            discount {
                id
                type
                expiredAt
            }
        }
        ...GetPromocode
    }
    ${getPromocodeFragment}
`;
