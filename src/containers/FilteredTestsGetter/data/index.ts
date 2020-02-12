import { ChildDataProps, graphql } from 'react-apollo';
import { TestType } from '@client/apollo/schemaTypes';
import { getFilteredTests } from '../schemas';

export interface Input {
    redirect?: boolean;
    render(filteredTests: TestType[]): React.ReactElement;
}

export interface Response {
    filteredTests: TestType[];
}

export type ChildProps = ChildDataProps<Input, Response, {}>;

const withData = graphql<Input, Response, {}, ChildProps>(getFilteredTests, {
    options: {
        fetchPolicy: 'cache-only',
    },
});

export default withData;
