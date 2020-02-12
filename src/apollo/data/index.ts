import { DataInterface } from '@client/apollo/types';

const data: DataInterface | any = {
    slugsForTests: [],
    filteredTests: [],
    savedTestResults: [],
    TodoItem: {
        id: '1',
        completed: false,
        __typename: 'TodoItem',
    },
    isLoggedIn: false,
};

export default data;
