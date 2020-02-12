import {
    InMemoryCache,
    IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';

import introspectionQueryResultData from '@client/apollo/schemaTypes';

const cache = new InMemoryCache({
    fragmentMatcher: new IntrospectionFragmentMatcher({
        introspectionQueryResultData,
    }),
// eslint-disable-next-line @typescript-eslint/no-angle-bracket-type-assertion
}).restore((window as any).__APOLLO_STATE__);

export default cache;
