import React, { FunctionComponent } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SubjectsEnum } from '@client/apollo/schemaTypes';

import { SubscribeWebinarsLinkRoot } from './styled';
import { freeWebinarsSubscribe } from './schemas';

export interface SubscribeWebinarsLinkProps {
    slug: SubjectsEnum | string;
    link?: string;
    children: React.ReactElement;
}

type Props = SubscribeWebinarsLinkProps;

const SubscribeWebinarsLink: FunctionComponent<Props> = ({
    slug,
    link = 'https://vk.com/app5898182_-184945497#s=449825',
    children,
    ...props
}) => {
    const [fetchFreeWebinarsSubscribe] = useMutation(freeWebinarsSubscribe, {
        variables: {
            slug,
        },
    });
    return (
        <SubscribeWebinarsLinkRoot
            onClick={
                () => {
                    if (slug) {
                        fetchFreeWebinarsSubscribe();
                        window.open(link, '_blank');
                    }
                }
            }
            {...props}
        >
            {children}
        </SubscribeWebinarsLinkRoot>
    );
};

export default SubscribeWebinarsLink;
