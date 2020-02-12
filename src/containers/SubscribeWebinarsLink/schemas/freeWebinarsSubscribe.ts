import gql from 'graphql-tag';

export default gql`
    mutation freeWebinarsSubscribe($slug: SubjectsEnum!) {
        freeWebinarsSubscribe(slug: $slug)
    }
`;
