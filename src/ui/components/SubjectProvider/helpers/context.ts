import React from 'react';

import { SubjectContextProps } from './types';

const subjectType = {
    math: 'math',
    rus: 'rus',
    eng: 'eng',
    chemistry: 'chemistry',
    physics: 'physics',
    history: 'history',
    literature: 'literature',
    socialStudies: 'socialstudies',
    informatics: 'informatics',
    biology: 'biology',
};

const SubjectContext = React.createContext<SubjectContextProps>({
    subjectType: subjectType.math,
});

const SubjectContextProvider = SubjectContext.Provider;

export {
    subjectType,
    SubjectContext,
    SubjectContextProvider,
};
