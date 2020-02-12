import React from 'react';
import { Query, withApollo, WithApolloClient } from 'react-apollo';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';

import Vk from '@client/assets/img/vk.png';
import { validateUrl } from '@client/helpers/tools';
import { getUserInfo } from '@client/containers/UserInformer/schemas';
import { Token, Users } from '@client/apollo/schemaTypes';
import Spin from '@client/ui/components/Spin';
import { handleRedirectWithReferrerLink } from '../../helpers';
import { Agenda } from './components';
import {
    VkAuthRoot,
    Content,
    StyledButton,
    VkLogo,
} from './styled';
import { GetJwtToken } from './schemas';

interface VkAuthState {
    loading: boolean;
    redirectLink: string;
}

class VkAuth extends React.PureComponent<WithApolloClient<RouteComponentProps>, VkAuthState> {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            redirectLink: '',
        };
    }

    componentDidMount() {
        const { client, history } = this.props;
        if (window.location.search) {
            const strArray = window.location.search.match(/([^?=&=]+)=?([^&]*)/gm) || [];
            let codeValue = '';
            strArray.forEach((str) => {
                const [key = '', value = ''] = str.split('=') || [];
                if (key === 'code' && value) {
                    codeValue = value;
                }
            });
            if (codeValue) {
                const referrerLink = localStorage.getItem('referrer');
                this.setState({
                    loading: true,
                });
                client.query<{ login: Token }>({
                    query: GetJwtToken,
                    variables: {
                        provider: 'vk',
                        token: codeValue,
                    },
                    context: {
                        timeout: 10000,
                        important: true,
                    },
                })
                    .then(({ data }) => {
                        const { login } = data;
                        localStorage.setItem('token', login.accessToken || '');
                        return handleRedirectWithReferrerLink({
                            history,
                            client,
                        });
                    })
                    // eslint-disable-next-line consistent-return
                    .catch(({ data }) => {
                        this.setState({
                            loading: false,
                        });
                    });
            }
        }
        window.vkAsyncInit = () => {
            // @ts-ignore
            const { VK } = window;
            VK.init({
                apiId: process.env.VK_APP_ID,
            });
        };
        setTimeout(() => {
            const el = document.createElement('script');
            el.type = 'text/javascript';
            el.src = 'https://vk.com/js/api/openapi.js?162';
            el.async = true;
            // @ts-ignore
            document.getElementById('vk_api_transport').appendChild(el);
        }, 0);
    }


    authUser = () => {
        const path = window.location.origin + window.location.pathname;
        window.location.href = `https://oauth.vk.com/authorize?client_id=${process.env.VK_APP_ID}&display=page&redirect_uri=${path}&response_type=code&v=5.101&scope=email`;
    };

    render() {
        const { loading, redirectLink } = this.state;

        if (redirectLink) {
            return <Redirect to={redirectLink} />;
        }

        return (
            <VkAuthRoot>
                {loading
                    ? <Spin color="white" />
                    : (
                        <Content>
                            <h2>Войти через Вконтакте</h2>
                            <p>чтобы посмотреть бесплатный вебинар и пройти бесплатный урок</p>
                            <StyledButton
                                onClick={this.authUser}
                                color="yellow"
                                type="rounded"
                                gutter={48}
                            >
                                <>
                                    <VkLogo src={Vk} alt="Vk" />
                                    войти через вк
                                </>
                            </StyledButton>
                            <Agenda />
                            <div id="vk_api_transport" />
                        </Content>
                    )}
            </VkAuthRoot>
        );
    }
}

export default withApollo(withRouter(VkAuth));
