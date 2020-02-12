import React from 'react';
import withUserData, { UserHandlerChildProps } from '@client/containers/UserInformer';
import {
    ProfileRoot,
    StyledH,
    StyledLink,
} from './styled';

function Profile({ user }: UserHandlerChildProps): React.ReactElement {
    const name = user?.name ?? user?.email ?? '';
    const avatar = user?.avatar ?? '';

    return (
        <ProfileRoot avatar={avatar}>
            <StyledH>
                Привет,
                <br />
                {name}
            </StyledH>
            <StyledLink color="purple">Твой профиль</StyledLink>
        </ProfileRoot>
    );
}

export default withUserData(Profile);
