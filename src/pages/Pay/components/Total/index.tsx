import React, {
    FunctionComponent, useMemo, useState,
} from 'react';
import moment from 'moment';
import { declOfNum } from '@client/helpers';
import { PaymentContainer } from '@client/containers';
import { CountObjType, IsTestDriveObjType } from '@client/pages/Pay';
import { Course as CourseType, Maybe } from '@client/apollo/schemaTypes';
import { PaymentContainerProps } from '@client/containers/Payment';
import {
    itemForms,
} from './helpers';
import {
    TotalRoot,
    Checker,
    StyledCheckBox,
    StyledButton,
    StyledLink,
} from './styled';

export interface OwnProps {
    countObj: CountObjType;
    isTestDriveObj: IsTestDriveObjType;
    courses: Maybe<CourseType>[];
}

const Total: FunctionComponent<OwnProps> = (props) => {
    const {
        isTestDriveObj,
        countObj,
        courses,
    } = props;
    const [agree, setAgree] = useState(true);

    const expireDate = useMemo(() => {
        if (courses.length === 1) {
            // eslint-disable-next-line max-len
            const subscriptionExpiredAt = isTestDriveObj?.[courses[0]?.id ?? ''] ?? '';
            const courseCount = countObj?.[courses[0]?.id ?? ''] ?? 1;
            if (subscriptionExpiredAt && moment.utc(subscriptionExpiredAt).isAfter(moment())) {
                // eslint-disable-next-line max-len
                return moment.utc(subscriptionExpiredAt, 'YYYY-MM-DD HH:mm:ss').add(courseCount, 'month').format('DD.MM.YYYY');
            }
            return moment().add(courseCount, 'month').format('DD.MM.YYYY');
        }
        return '';
    }, [countObj, courses, isTestDriveObj]);

    const paymentContainerData = useMemo(() => {
        const courseIds: PaymentContainerProps['courseIds'] = [];
        const costs: PaymentContainerProps['costs'] = {};
        courses.forEach((course) => {
            if (course?.id) {
                courseIds.push(course.id);
                costs[course.id] = course?.cost ?? 0;
            }
        });
        return {
            courseIds,
            costs,
        };
    }, [courses]);
    const {
        courseIds,
        costs,
    } = paymentContainerData;

    return (
        <PaymentContainer
            paymentType="standard"
            courseIds={courseIds}
            costs={costs}
            counts={countObj}
        >
            {({
                onBuy,
                totalSum,
                showPrivacy,
            }) => (
                <TotalRoot>
                    <h2>Итого</h2>
                    <p>{`${totalSum} р.`}</p>
                    <p>
                        <>
                            {// eslint-disable-next-line max-len
                                expireDate && (
                                <>
                                    {`1 ${declOfNum(1, itemForms)} до ${expireDate}`}
                                    <br />
                                </>
                                )
                            }
                        </>
                    </p>
                    <Checker>
                        <StyledCheckBox
                            checked={agree}
                            onCheck={setAgree}
                        />
                        <p>
                            <StyledLink onClick={() => showPrivacy()}>
                                Согласен с правилами работы на платформе
                            </StyledLink>
                        </p>
                    </Checker>
                    <StyledButton
                        color="yellow"
                        type="rounded"
                        disabled={!agree}
                        onClick={() => onBuy()}
                    >
                        КУПИТЬ
                    </StyledButton>
                    <p>
                        При отмене подписки вы теряете доступ
                        к обучению до восстановления подписки
                    </p>
                </TotalRoot>
            )}
        </PaymentContainer>
    );
};

export default Total;
