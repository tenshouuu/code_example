import {
    ChildDataProps,
    graphql,
    QueryControls,
} from 'react-apollo';
import {
    Course,
    GetProfileDataQueryVariables,
    Users,
} from '@client/apollo/schemaTypes';
import GetCourses from './schemas/getProfileData.graphql';

interface OveridedMe extends Users {
    courses: Course[];
}

interface Response { me: OveridedMe }

export type ChildProps = ChildDataProps<QueryControls, Response, GetProfileDataQueryVariables>;

const withData = graphql<
{},
Response,
GetProfileDataQueryVariables,
ChildProps
>(GetCourses);

export default withData;
