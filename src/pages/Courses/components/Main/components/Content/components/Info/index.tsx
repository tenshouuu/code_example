import React, { FunctionComponent, useContext } from 'react';

import { Icon } from '@client/ui/components';
import { AccessCourseContext } from '@client/components/Payment/helpers/context';
import {
    InfoRoot,
    Title,
    Description,
    List,
    Feature,
} from './styled';

export interface InfoProps {
    title: string;
    description: string;
}

type Props = InfoProps;

const Info: FunctionComponent<Props> = ({
    title,
    description,
    ...props
}) => {
    const accessCourse = useContext(AccessCourseContext);
    return (
        <InfoRoot isFeatures={!accessCourse} {...props}>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <List>
                <Feature>
                    <Icon.CheckList color="purple" />
                    <p>
                        Разбор всех
                        <br />
                        {' '}
                        заданий егэ
                    </p>
                </Feature>
                <Feature>
                    <Icon.SearchList color="purple" />
                    <p>
                        Проверка и анализ
                        <br />
                        {' '}
                        домашних заданий
                    </p>
                </Feature>
                <Feature>
                    <Icon.Fisting color="purple" />
                    <p>
                        Личный наставник
                        <br />
                        {' '}
                        и мотивация
                    </p>
                </Feature>
            </List>
        </InfoRoot>
    );
};

export default Info;
