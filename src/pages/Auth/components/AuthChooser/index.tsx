import React from 'react';
import Vk from '@client/assets/img/vk.png';

import {
    AuthChooserRoot,
    Social,
    LinkStyled,
    Content,
} from './styled';
import { Entry } from './components';

const AuthChooser: React.FunctionComponent = () => (
    <AuthChooserRoot>
        <Content>
            <h2>Авторизация</h2>
            <Entry />
            <Social>
                <LinkStyled to="/auth/vk">
                    <img src={Vk} alt="VK" />
                </LinkStyled>
            </Social>
        </Content>
    </AuthChooserRoot>
);

export default React.memo(AuthChooser);
