import React, { FunctionComponent } from 'react';
import { RouteComponentProps, useRouteMatch, withRouter } from 'react-router-dom';
import { NavItem, PanelRoot } from './styled';

export interface PanelItems {
    title: string;
    link: string;
    exact?: boolean;
}

export interface PanelProps {
    items: PanelItems[];
}

type Props = PanelProps & RouteComponentProps;

const Panel: FunctionComponent<Props> = ({
    items,
    ...props
}) => {
    const { url } = useRouteMatch();
    return (
        <PanelRoot {...props}>
            {
                items.length > 1
                    ? items.map(({ title, exact = false, link }, i) => (
                        <li key={i}>
                            <NavItem to={url + link} exact={exact}>
                                {title}
                            </NavItem>
                        </li>
                    ))
                    : ''
            }
        </PanelRoot>
    );
};

export default withRouter(Panel);
