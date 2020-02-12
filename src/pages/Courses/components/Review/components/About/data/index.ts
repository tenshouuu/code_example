import { ChildDataProps, ChildProps as ChildApolloProps, graphql } from 'react-apollo';
import { Lesson, Maybe } from '@client/apollo/schemaTypes';
import { getFreeWebinars } from './schemas';

export interface Input {
    [key: string]: any;
}

export interface Response {
    dashboardStartWebinarsV2: Maybe<Lesson[]>;
}

export interface Variables {
    slug: string;
}

export type ChildProps = ChildDataProps<Input, Response, Variables>;
export type ChildApolloPropsType = ChildApolloProps<Input, Response, Variables>;

const withData = graphql<any, Response, Variables, ChildProps>(getFreeWebinars, {
    options: ({ slug = '' }) => ({
        variables: { slug },
    }),
});

export default withData;
