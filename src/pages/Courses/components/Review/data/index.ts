import {
    ChildDataProps,
    graphql,
    QueryControls,
} from 'react-apollo';
import {
    GetCourseDataQueryVariables,
    Course,
} from '@client/apollo/schemaTypes';
import { getCourseData } from './schemas';

interface Response { course: Course }

export type ChildProps = ChildDataProps<QueryControls, Response, GetCourseDataQueryVariables>;

const withData = graphql<
{ id: string } & any,
Response,
GetCourseDataQueryVariables,
ChildProps
>(getCourseData);

export default withData;
