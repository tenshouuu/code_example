import ApolloClient from 'apollo-client';
import { RouteComponentProps } from 'react-router';
import { GetUserInfoQuery } from '@client/apollo/schemaTypes';
import { getUserInfo } from '@client/containers/UserInformer/schemas';

export const handleRedirectWithReferrerLink: (p: {
    client: ApolloClient<any>;
    history: RouteComponentProps['history'];
}) => void = ({
    client,
    history,
}) => client.query<GetUserInfoQuery>({
    query: getUserInfo,
    fetchPolicy: 'network-only',
}).then(({ data }) => {
    if (data?.me) {
        const referrerLink = localStorage.getItem('referrer');
        localStorage.setItem('referrer', '');
        if (referrerLink) {
            if ((data?.me?.subjects && data.me.subjects.length > 0) || referrerLink.search('promo=1') !== -1) {
                history.push(referrerLink);
            } else {
                history.push('/onboard');
            }
        } else if (data?.me?.onboardingCompleted) {
            history.push('/dashboard');
        } else {
            history.push('/onboard');
        }
    }
});
