import { Users, Course, Token } from '@client/apollo/schemaTypes';

export interface DataInterface {
    users: Users[];
    courses: Course[];
    login: Token;
    isLoggedIn: boolean;
}
