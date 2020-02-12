import React from 'react';
import { Redirect } from 'react-router-dom';
import withData, { ChildProps } from './data';

function withTests(Component) {
    class FilteredTestsGetter extends React.Component<ChildProps> {
        // eslint-disable-next-line max-len
        shouldComponentUpdate(nextProps: Readonly<ChildProps>, nextState: Readonly<{}>, nextContext: any): boolean {
            const {
                data: {
                    filteredTests = [],
                },
            } = this.props;
            const nextFilteredTests = nextProps.data.filteredTests || [];
            if (nextFilteredTests.length === filteredTests.length) {
                return false;
            }
            return true;
        }

        render() {
            const {
                redirect = false,
                data: {
                    loading,
                    error,
                    filteredTests = [],
                },
                ...anotherProps
            } = this.props;
            // eslint-disable-next-line max-len
            const filteredByQuestionsTs = filteredTests.filter(({ questions = [] }) => questions && questions.length !== 0);
            if (error && !loading) {
                return <Redirect to="/onboard/finish" />;
            }

            return (
                <Component filteredTests={filteredByQuestionsTs} {...anotherProps} />
            );
        }
    }

    return withData(FilteredTestsGetter);
}

export default withTests;
