import gql from 'graphql-tag';

import fragments from '@client/apollo/fragments';
import { getSavedTestResults } from '@client/containers/TestResultsGetter/schemas';
import { getTests } from '@client/containers/TestHandler/schemas';

const testCollection = (_, { slugs }, { cache }) => {
    const filteredTests = slugs.map((slug) => {
        const { subjects } = cache.readQuery({
            query: getTests,
            variables: { slug },
        });
        if (subjects[0] && subjects[0].test) {
            return subjects[0].test;
        }
        return false;
    });
    cache.writeData({
        data: {
            slugsForTests: [...slugs],
            filteredTests: filteredTests.filter(Boolean),
        },
    });
    return null;
};

const addToTestsCollection = (_, { savedResults }, { cache }) => {
    const results = JSON.parse(savedResults);
    const { slugsForTests = [] } = cache.readQuery({
        query: gql`
            query slugsForTests {
                slugsForTests
            }
        `,
    });

    const tests = slugsForTests.map((slug) => {
        const { subjects } = cache.readQuery({
            query: getTests,
            variables: { slug },
        });
        if (subjects[0] && subjects[0].test) {
            return subjects[0].test;
        }
        return false;
    });

    const { savedTestResults } = cache.readQuery({
        query: getSavedTestResults,
    });
    results.test.title = tests[0].title;
    results.maxScore = tests[0].questions.length;
    let writeDataFlag = true;
    savedTestResults.forEach(({ id }) => {
        if (id === results.id) {
            writeDataFlag = false;
        }
    });
    if (writeDataFlag) {
        cache.writeData({ data: { savedTestResults: [...savedTestResults, results] } });
    }
    return null;
};

const Mutation = {};

const Query = {
    testCollection,
    addToTestsCollection,
};

export default {
    Mutation,
    Query,
};
