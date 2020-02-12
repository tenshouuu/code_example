import React from 'react';

export const AccessCourseContext = React.createContext<boolean>(false);

const AccessCourseContextProvider = AccessCourseContext.Provider;

export default AccessCourseContextProvider;
