import { ApolloClient } from 'apollo-client';
import ApolloLinkTimeout from 'apollo-link-timeout';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ErrorResponse, onError } from 'apollo-link-error';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloLink } from 'apollo-link';
import { BatchHttpLink } from 'apollo-link-batch-http';

import { isTestHost } from '@client/helpers';

import {
    FORBIDDEN,
    UNAUTHORIZED,
    JWT,
} from './consts';

import cache from './cache';
import resolvers from './resolvers';
import initialStore from './data';

const isProduction = process.env.NODE_ENV === 'production';
const timeoutLink = new ApolloLinkTimeout(3000);

const errorLink = onError(({
    graphQLErrors,
    networkError,
    forward,
    response,
    operation,
}: ErrorResponse) => {
    if (graphQLErrors && graphQLErrors.filter(e => e).length > 0) {
        // eslint-disable-next-line no-restricted-syntax
        for (const error of graphQLErrors) {
            const { message } = error;
            switch (message) {
                case UNAUTHORIZED:
                    console.warn(`You've attempted to access ${UNAUTHORIZED} section`);
                    localStorage.removeItem('token');
                    if (!window.location.pathname.startsWith('/auth')) {
                        window.location.pathname = '/auth';
                    }
                    console.warn(`You've attempted to access ${UNAUTHORIZED} section`);
                    return forward(operation);
                case FORBIDDEN:
                    console.warn(`You've attempted a ${FORBIDDEN} action`);
                    break;
                default:
                    break;
            }
        }
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});


const batchHttpLink: BatchHttpLink = new BatchHttpLink({
    uri: process.env.API_URL,
    headers: {
        batch: 'true',
    },
});
const httpLink = new HttpLink({
    uri: process.env.API_URL,
});

const authMiddlewareLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});


const timeoutHttpLink = timeoutLink.split(
    operation => operation.getContext().important === true,
    httpLink,
    batchHttpLink,
);

const link = ApolloLink.from([
    errorLink,
    authMiddlewareLink,
    createUploadLink({
        uri: process.env.API_URL,
        headers: {
            authorization: `Bearer ${localStorage.getItem('aToken') || null}`,
        },
    }),
    timeoutHttpLink,
]);


const index = new ApolloClient({
    link,
    cache,
    connectToDevTools: !isProduction,
    resolvers,
});

cache.writeData({ data: initialStore });

// @ts-ignore
index.onResetStore(() => cache.writeData({ data: initialStore }));

export default index;
