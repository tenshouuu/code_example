import React, { useState } from 'react';
import withUserData, { UserHandlerChildProps } from '@client/containers/UserInformer';

import {
    PanelRoot,
    StyledLink,
    StyledAvatar,
    StyledIconWrapper,
    StyledNotification,
    StyledRcTooltip,
    Name,
} from './styled';

function Panel({
    user,
    ...props
}: UserHandlerChildProps): React.ReactElement {
    const [visible, setVisible] = useState();
    const onVisibleChange = (newVisible) => {
        setVisible(newVisible);
    };

    return (
        <PanelRoot {...props}>
            <StyledNotification />
            <StyledIconWrapper type="search" disabled />
            <StyledIconWrapper type="score" disabled />
            <StyledIconWrapper to="/dashboard/pay" type="ruble" disabled />
            <Name>{user?.name ?? user?.email ?? ''}</Name>
            <div>
                <StyledRcTooltip
                    placement="bottom"
                    trigger="hover"
                    visible={visible}
                    onVisibleChange={onVisibleChange}
                    overlay={
                        <StyledLink to="/logout">Выйти</StyledLink>
                    }
                >
                    <StyledAvatar img={user?.avatar ?? ''} />
                </StyledRcTooltip>
            </div>
        </PanelRoot>
    );
}

export default withUserData(Panel);
