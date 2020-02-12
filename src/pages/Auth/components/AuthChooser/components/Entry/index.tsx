import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { withApollo, WithApolloClient } from 'react-apollo';
import { ErrorResponse } from 'apollo-link-error';

import { Spin } from '@client/ui/components';

import { handleRedirectWithReferrerLink } from '../../helpers';
import {
    EntryRoot,
    ButtonStyled,
    InputStyled,
    Error,
} from './styled';
import { ManualLogin } from './schemas';

export type EntryType = WithApolloClient<RouteComponentProps>;

interface EntryState {
    isEmailValid: boolean;
    isPasswordValid: boolean;
    error: ErrorResponse | null;
    email: string;
    password: string;
    [key: string]: any;
}

class Entry extends React.Component<EntryType, EntryState> {
    state = {
        email: '',
        password: '',
        isEmailValid: true,
        isPasswordValid: true,
        error: null,
        loading: false,
    };

    tryLogin = () => {
        const { client } = this.props;
        const {
            email,
            password,
        } = this.state;
        return client.query({
            query: ManualLogin,
            variables: {
                email,
                password,
            },
        });
    };

    onChange = (field: 'email' | 'password') => (e) => {
        this.setState({
            [field]: e?.target?.value || '',
            [`is${field[0].toUpperCase() + field.slice(1, field.length)}Valid`]: true,
        });
    };

    validateEmail = () => {
        const { email = '' } = this.state;
        return email.length > 0;
    };

    validatePassword = () => {
        const { password = '' } = this.state;
        return password.length > 0;
    };

    validate = () => {
        const isEmailValid = this.validateEmail();
        const isPasswordValid = this.validatePassword();
        if (isEmailValid && isPasswordValid) {
            return true;
        }
        this.setState({
            isEmailValid,
            isPasswordValid,
        });
        return false;
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {
            client,
            history,
            location,
        } = this.props;
        if (!this.validate()) return;
        this.setState({
            loading: true,
        });
        this.tryLogin()
            .then(({ data }) => {
                const { manualLogin } = data;
                localStorage.setItem('token', manualLogin.accessToken);
                client.writeData({ data: { isLoggedIn: true } });
                return handleRedirectWithReferrerLink({
                    history,
                    client,
                });
            })
            .catch((error) => {
                this.setState({
                    error,
                });
            })
            .finally(() => this.setState({
                loading: false,
            }));
    };

    render() {
        const {
            isEmailValid,
            isPasswordValid,
            error,
            loading,
        } = this.state;

        return (
            <EntryRoot onSubmit={this.onSubmit}>
                <InputStyled
                    onChange={this.onChange('email')}
                    placeholder="Email"
                    type="email"
                    isValid={isEmailValid}
                />
                <InputStyled
                    type="password"
                    onChange={this.onChange('password')}
                    placeholder="Пароль"
                    isValid={isPasswordValid}
                />
                <ButtonStyled
                    color="yellow"
                    type="rounded"
                    htmlType="submit"
                >
                    {loading ? <Spin size="small" /> : 'Войти'}
                </ButtonStyled>
                {
                    // @ts-ignore
                    (error?.graphQLErrors ?? []).map(({ message, debugMessage }, i) => (
                        <Error key={i}>
                            {debugMessage === 'Unauthenticated.' ? 'Неверный логин или пароль' : (debugMessage ?? message)}
                        </Error>
                    ))
                }
            </EntryRoot>
        );
    }
}

export default withRouter(withApollo<EntryType>(Entry));
