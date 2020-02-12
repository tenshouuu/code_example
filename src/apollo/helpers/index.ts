import { QueryOptions } from 'apollo-client/core/watchQueryOptions';
import gql from 'graphql-tag';

export const butchQueries = (queries: QueryOptions[] = []) => queries.reduce((accumulator, currentValue) => ({
    ...accumulator,
    ...currentValue,
    query: gql`
                ${accumulator.query}
                ${currentValue.query}
            `,
    variables: {
        ...accumulator.variables,
        ...currentValue.variables,
    },
}), {
    query: gql``,
    variables: {},
});
