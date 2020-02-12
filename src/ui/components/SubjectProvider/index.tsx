import React, { useContext } from 'react';
import { SubjectContextProvider, SubjectContext } from './helpers';

export interface WithSubjectProps {
    subjectType: string;
}

export function withSubject(Component) {
    return function StepTestWrapper(props) {
        return (
            <SubjectContext.Consumer>
                {value => (
                    <Component subjectType={value.subjectType} {...props} />
                )}
            </SubjectContext.Consumer>
        );
    };
}

export function useSubject(): string {
    const value = useContext(SubjectContext);
    return value.subjectType;
}

export { subjectType } from './helpers';

export default SubjectContextProvider;
