import gql from 'graphql-tag';

import fragments from '@client/apollo/fragments';
import { Query } from '@client/apollo/schemaTypes';

export interface AuthByHashResponse {
    loginByHash: Query['loginByHash'];
}

export default gql`
    query authByHash($hash: String!) {
       loginByHash(hash: $hash) {
           ...TokenInfo
       }
    }
    ${fragments.tokenInfo}
`;
