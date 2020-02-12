/* eslint-disable max-len */
import React, {
    FunctionComponent, useContext, useMemo, useRef, useState,
} from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';
import { useQuery } from '@apollo/react-hooks';

import { PaymentContainer, Animate } from '@client/containers';

import { slugDeclension } from '@client/helpers';
import { AccessCourseContext } from './helpers/context';
import {
    PaymentRoot,
    Wrapper,
    PromoInput,
    Price,
    DateInfo,
    Title,
    Check,
    StyledCheckBox,
    StyledButton,
    StyledSelect,
    InputWrapper,
    StyledAnimate,
    StyledChecked,
    StyledLabelBlock, DetailsLink,
} from './styled';
import { getCourseExpireDate } from './schemas';

export interface PaymentProps {
    courseId: string;
    cost: number;
    slug?: string;
}

type Props = PaymentProps;

const Payment: FunctionComponent<Props> = ({
    courseId,
    cost = 0,
    slug,
    ...props
}) => {
    const [count, setCount] = useState(1);
    const [agree, setAgree] = useState(true);
    const [promoValue, setPromoValue] = useState('');
    const accessCourse = useContext(AccessCourseContext);
    const promoRef = useRef<HTMLInputElement>(null);
    const history = useHistory();

    const { data } = useQuery(getCourseExpireDate, {
        variables: {
            ids: [courseId],
        },
    });


    const expireDate = useMemo(() => {
        const userCourses = data?.userCourses;
        if (userCourses?.[0]?.subscriptionExpiredAt && moment.utc(userCourses[0].subscriptionExpiredAt).isAfter(moment())) {
            return moment.utc(userCourses[0].subscriptionExpiredAt, 'YYYY-MM-DD HH:mm:ss').add(count, 'month').format('DD.MM.YYYY');
        }
        return moment().add(count, 'month').format('DD.MM.YYYY');
    }, [count, data]);

    const handleChangePromoInput = (e) => {
        const value = e?.target?.value;
        setTimeout(async () => {
            if (value && value === promoRef?.current?.value) {
                setPromoValue(value);
            }
        }, 1000);
    };

    return (
        <PaymentRoot
            accesscourse={accessCourse ? 1 : 0}
            checked={agree}
            {...props}
        >
            <Wrapper>
                {accessCourse ? (
                    <>
                        <Title>Твой курс</Title>
                        <DateInfo>
                            Ваша подписка
                            <br />
                            {' '}
                            {`действует до ${expireDate}`}
                        </DateInfo>
                        <StyledButton
                            type="rounded"
                            color="yellow"
                            onClick={() => history.push({
                                pathname: '/pay',
                                state: {
                                    ids: [courseId],
                                },
                            })}
                        >
                            ПРОДЛИТЬ ПОДПИСКУ
                        </StyledButton>
                    </>
                ) : (
                    <PaymentContainer
                        courseIds={[courseId]}
                        costs={{ [courseId]: cost }}
                        counts={{ [courseId]: count }}
                        promoCode={promoValue}
                        paymentType="standard"
                    >
                        {({
                            onBuy,
                            totalSum,
                            promoPercent,
                            promoIsActive,
                            showPrivacy,
                            userDataLoaded,
                        }) => (
                            <>
                                <Title>
                                    Купить курс
                                    {
                                        slug ? <p>{`по ${slugDeclension(slug, 'dative').toLowerCase()}`}</p> : ''
                                    }
                                </Title>
                                <StyledSelect
                                    count={count}
                                    setCount={setCount}
                                />
                                <InputWrapper>
                                    <PromoInput
                                        ref={promoRef}
                                        placeholder="Промокод (если есть)"
                                        onChange={handleChangePromoInput}
                                    />
                                    <StyledAnimate show={promoIsActive}>
                                        <StyledChecked />
                                    </StyledAnimate>
                                </InputWrapper>
                                <Price>{`${totalSum} р.`}</Price>
                                <DateInfo>
                                    1 предмет
                                    <br />
                                    {' '}
                                    {`до ${expireDate}`}
                                </DateInfo>
                                <Check>
                                    <StyledCheckBox
                                        checked={agree}
                                        onCheck={setAgree}
                                    />
                                    <p>
                                        <span onClick={() => showPrivacy()}>
                                            Согласен с Политикой Конфиденциальности
                                        </span>
                                    </p>
                                </Check>
                                <StyledButton
                                    disabled={!agree}
                                    type="rounded"
                                    color="yellow"
                                    onClick={() => { onBuy(); }}
                                >
                                    КУПИТЬ
                                </StyledButton>
                                {
                                    slug
                                        ? (
                                            <DetailsLink
                                                onClick={() => {
                                                    history.push({
                                                        pathname: '/courses',
                                                        state: {
                                                            slug,
                                                        },
                                                    });
                                                }}
                                            >
                                                Подробнее о курсе
                                            </DetailsLink>
                                        )
                                        : ''
                                }
                                <Animate show={userDataLoaded}>
                                    <PaymentContainer
                                        courseIds={[courseId]}
                                        costs={{ [courseId]: cost }}
                                        counts={{ [courseId]: count }}
                                        paymentType="test-drive"
                                        isCache
                                    >
                                        {({ onBuy: onTestDriveBuy }) => (
                                            <StyledLabelBlock
                                                title="Попробуй группу полного погружения на неделю"
                                                price={200}
                                                description=""
                                                submitAction={onTestDriveBuy}
                                            />
                                        )}
                                    </PaymentContainer>
                                </Animate>
                            </>
                        )}
                    </PaymentContainer>
                )}
            </Wrapper>
        </PaymentRoot>
    );
};

export default Payment;
