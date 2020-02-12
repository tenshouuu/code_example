import React, { FunctionComponent } from 'react';

import { usePreviewLocation } from '@client/containers/PreviewRouteProvider';
import { useHistory } from 'react-router';
import { NotFoundRoot, StyledLogo, StyledButton } from './styled';

export interface NotFoundProps {}

type Props = NotFoundProps;

const NotFound: FunctionComponent<Props> = () => {
    const history = useHistory();
    const previewLocation = usePreviewLocation();
    return (
        <NotFoundRoot>
            <StyledLogo type="dark" />
            <h1>404</h1>
            <p>Страница не найдена</p>
            {previewLocation?.pathname ? (
                <StyledButton
                    onClick={() => history.push(previewLocation.pathname)}
                >
                Вернуться
                </StyledButton>
            ) : null}
        </NotFoundRoot>
    );
};

export default NotFound;
