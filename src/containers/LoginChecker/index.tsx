import React, { useEffect } from 'react';

import Spin from '@client/ui/components/Spin';
import styled from 'styled-components';
import { getColorByName } from '@client/helpers';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import { getUserInfo } from '@client/containers/UserInformer/schemas';
import { authByHash } from './schemas';
import { AuthByHashResponse } from './schemas/authByHash';

export interface LoginCheckerProps {
    children: React.ReactElement;
}

type Props = LoginCheckerProps;

export const LoadingWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        display: flex;
        align-items: center;
    }

    & > div > span {
        color: ${getColorByName('white')};
        margin-left: 20px;
    }
`;

function LoginChecker(props: Props): React.ReactElement {
    const {
        children,
    } = props;
    const { loading } = useQuery(getUserInfo);
    const [fetchAuthByHash] = useLazyQuery<AuthByHashResponse>(authByHash, {
        onCompleted: (data) => {
            if (data?.loginByHash?.accessToken) {
                localStorage.setItem('token', data.loginByHash.accessToken);
                window.location.reload();
            }
        },
    });

    useEffect(() => {
        if (URLSearchParams && (window.location.search)) {
            const urlParams = new URLSearchParams(window.location.search);
            const loghash = urlParams.get('loghash');
            const token = localStorage.getItem('token');
            if (loghash && !token) {
                fetchAuthByHash({
                    variables: {
                        hash: loghash,
                    },
                });
            }
        }
    }, [fetchAuthByHash]);

    if (loading) {
        return (
            <LoadingWrapper>
                <div>
                    <Spin />
                    <span>Подгружаемся...</span>
                </div>
            </LoadingWrapper>
        );
    }


    return (
        <>
            { children }
        </>
    );
}

export default LoginChecker;
