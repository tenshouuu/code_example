import React, { FunctionComponent, useContext, useMemo } from 'react';
import { CourseIdContext } from '@client/pages/Courses';
import { TestType, UserTest, UserTestStatusEnum } from '@client/apollo/schemaTypes';
import Maybe from 'graphql/tsutils/Maybe';
import { getLastItemById } from '@client/helpers/tools';
import moment from 'moment';
import { useHistory } from 'react-router';
import {
    BridgeRoot, Circle, Line, StyledAwesomeIcon,
} from './styled';

export enum BridgeStatusEnum {
    AVAILABLE = 'available', // куплен
    UNAVAILABLE = 'unavailable', // не куплен
}

export enum BridgeTestStatusEnum {
    ACTIVE = 'active', // Тест доступен для прохождения
    COMPLETED = 'completed', // 1. Тест не создан 2. Тест пройден
    LOCKED = 'locked', // Тест не доступен для прохождения (Модуль не закончился)
}

export enum OrientationEnum {
    CENTER = 'center',
    RIGHT = 'right',
    LEFT = 'left',
}

export interface BridgeProps {
    test: Maybe<TestType>;
    status: BridgeStatusEnum;
    orientation?: OrientationEnum;
    reverse?: boolean;
    maxWidthLimit?: number;
    moduleEndedAt: string;
}

type Props = BridgeProps;


const Bridge: FunctionComponent<Props> = ({
    test,
    status = BridgeStatusEnum.UNAVAILABLE,
    orientation = OrientationEnum.CENTER,
    reverse = false,
    maxWidthLimit = 0,
    moduleEndedAt = '',
    ...props
}) => {
    const history = useHistory();
    const testStatus = useMemo(() => {
        let newTestStatus: BridgeTestStatusEnum = BridgeTestStatusEnum.LOCKED;
        if (test) {
            if (moduleEndedAt) {
                const MModuleEndedAt = moment.utc(moduleEndedAt, 'YYYY-MM-DD HH:mm:ss');
                if (MModuleEndedAt.isBefore(moment())) {
                    newTestStatus = BridgeTestStatusEnum.ACTIVE;
                    if (test?.userTests && test.userTests?.length > 0) {
                        const lastUserTest = getLastItemById<UserTest>(test.userTests);
                        if (lastUserTest?.status === UserTestStatusEnum.Completed) {
                            newTestStatus = BridgeTestStatusEnum.COMPLETED;
                        }
                    }
                } else {
                    newTestStatus = BridgeTestStatusEnum.LOCKED;
                }
            }
        } else {
            newTestStatus = BridgeTestStatusEnum.COMPLETED;
        }

        return newTestStatus;
    }, [moduleEndedAt, test]);

    const isDisabled = useMemo(() => (status === BridgeStatusEnum.UNAVAILABLE
            || testStatus === BridgeTestStatusEnum.LOCKED
            || !test?.id
            || (!moduleEndedAt && testStatus === BridgeTestStatusEnum.COMPLETED)
    ), [moduleEndedAt, status, test, testStatus]);

    return (
        <BridgeRoot
            status={status}
            testStatus={testStatus}
            disabled={isDisabled}
            reverse={reverse}
            orientation={orientation}
            maxWidthLimit={maxWidthLimit}
            {...props}
        >
            <Line />
            <Circle
                onClick={() => {
                    if (isDisabled) {} else {
                        history.push({
                            pathname: `/test/${test?.id}`,
                        });
                    }
                }}
            >
                <span>Тест</span>
                <StyledAwesomeIcon type="checked" />
            </Circle>
        </BridgeRoot>
    );
};

export default Bridge;
