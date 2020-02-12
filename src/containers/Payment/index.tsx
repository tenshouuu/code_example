import React, {
    FunctionComponent, useEffect, useMemo, useState,
} from 'react';
import { useLazyQuery, useMutation, useQuery } from '@apollo/react-hooks';

import ConfirmEmailModal from '@client/components/ConfirmEmailModal';
import PrivacyModal from '@client/components/PrivacyModal';
import { CountObjType } from '@client/pages/Pay';
import { getCoursePriceInfo, getUserPaymentInfo, setPromocode } from './schemas';
import { handleCalculateTotalPrice, paymentFactory } from './helpers';
import { PaymentType } from './helpers/paymentFactory';
import {useHistory} from "react-router";


export interface PaymentContainerProps {
    courseIds: string[];
    costs: { [key: string]: number };
    counts: { [key: string]: number };
    promoCode?: string;
    isCache?: boolean;
    paymentType?: PaymentType;
    children(p: PaymentChildPropsType): React.ReactElement | null;
}

export interface PaymentChildPropsType {
    onBuy(): void;
    totalSum: number;
    totalPrice: { [key: string]: number };
    promoPercent: { [key: string]: number };
    promoIsActive: boolean;
    userDataLoaded: boolean;
    showPrivacy(): void;
    showEmailConfirm(): void;
}


type Props = PaymentContainerProps;

const usePaymentState = ({
    courseIds,
    costs,
    counts,
}: {
    courseIds: string[];
    costs: PaymentContainerProps['costs'];
    counts: CountObjType;
}) => {
    const [initState] = useState(() => {
        const initLocalCost = {};
        const initTotalPrice = {};
        const initPromoPercent = {};
        courseIds.forEach((id) => {
            if (id) {
                initLocalCost[id] = costs?.[id] ?? 0;
                initTotalPrice[id] = initLocalCost[id] * (counts[id] ?? 0);
                initPromoPercent[id] = 0;
            }
        });
        return {
            initLocalCost,
            initTotalPrice,
            initPromoPercent,
        };
    });
    const {
        initLocalCost,
        initTotalPrice,
        initPromoPercent,
    } = initState;
    const [localCost, setLocalCost] = useState(initLocalCost);
    const [totalPrice, setTotalPrice] = useState(initTotalPrice);
    const [promoPercent, setPromoPercent] = useState(initPromoPercent);
    return [
        {
            localCost,
            totalPrice,
            promoPercent,
        },
        {
            setLocalCost,
            setTotalPrice,
            setPromoPercent,
        },
    ];
};
let prevPromo = '';
const PaymentContainer: FunctionComponent<Props> = ({
    children,
    courseIds = [],
    costs = {},
    counts = {},
    promoCode = '',
    isCache = false,
    paymentType = 'standard',
    ...props
}) => {
    const [isEmailConfirmModalVisible, toggleEmailConfirmModal] = useState(false);
    const [promoIsActive, setPromoIsActive] = useState(false);
    const [isPrivacyOpened, togglePrivacy] = useState(false);
    const [{
        localCost = {},
        totalPrice = {},
        promoPercent = {},
    }, {
        setLocalCost,
        setTotalPrice,
        setPromoPercent,
    }] = usePaymentState({
        courseIds,
        costs,
        counts,
    });
    const usePayment = paymentFactory(paymentType);
    const { createPayment } = usePayment();
    const history = useHistory();

    const { data: userData, loading, error } = useQuery(getUserPaymentInfo, {
        fetchPolicy: isCache ? 'cache-first' : 'network-only',
        onCompleted: ({ userActivePromocode }) => {
            if (userActivePromocode?.length > 0) {
                const newPromoPercent = {};
                userActivePromocode.forEach((activePromocode) => {
                    const promoCourseId = activePromocode?.course?.id;
                    if (setPromoPercent
                        && activePromocode?.value
                        && promoCourseId
                        && costs[promoCourseId]) {
                        newPromoPercent[activePromocode.course.id] = activePromocode.value;
                    }
                });
                if (setPromoPercent) {
                    setPromoPercent(oldPromoPercent => ({
                        ...oldPromoPercent,
                        ...newPromoPercent,
                    }));
                }
            }
        },
    });
    const [fetchPromocode] = useMutation(setPromocode);
    const [fetchCoursePriceInfo] = useLazyQuery(getCoursePriceInfo, {
        variables: {
            ids: courseIds,
        },
        fetchPolicy: 'network-only',
        onCompleted: ({ userActivePromocode, courses }) => {
            if (userActivePromocode?.length > 0) {
                const newLocalCost = {};
                const newPromoPercent = {};
                let newPromoIsActive = false;

                const isCourseIdsObj = (courses?.data ?? []).reduce((prevObj, course) => (course?.id
                    ? {
                        ...prevObj,
                        [course.id]: course.cost,
                    }
                    : prevObj
                ), {});
                userActivePromocode.forEach((activePromocode) => {
                    if (activePromocode?.code === promoCode) {
                        const promoCourseId = activePromocode?.course?.id;
                        if (promoCourseId && isCourseIdsObj[promoCourseId]) {
                            newPromoIsActive = true;
                            newPromoPercent[promoCourseId] = activePromocode.value;
                            newLocalCost[promoCourseId] = isCourseIdsObj[promoCourseId];
                        }
                    }
                });
                setPromoIsActive(newPromoIsActive);
                if (setLocalCost) {
                    setLocalCost(oldLocalCost => ({
                        ...oldLocalCost,
                        ...newLocalCost,
                    }));
                }
                if (setPromoPercent) {
                    setPromoPercent(oldPromoPercent => ({
                        ...oldPromoPercent,
                        ...newPromoPercent,
                    }));
                }
            }
        },
    });

    useEffect(() => {
        const newTotalPrice = {};
        courseIds.forEach((id) => {
            newTotalPrice[id] = handleCalculateTotalPrice({
                price: localCost?.[id] ?? 0,
                count: counts[id] ?? 0,
                discount: userData?.me?.discount,
                promoPercent: promoPercent?.[id] ?? 0,
            });
        });
        if (setTotalPrice) {
            setTotalPrice(oldTotalPrice => ({
                ...oldTotalPrice,
                ...(newTotalPrice ?? {}),
            }));
        }
    }, [courseIds, counts, userData, promoPercent]);

    useEffect(() => {
        if (promoCode && promoCode !== prevPromo) {
            prevPromo = promoCode;
            try {
                fetchPromocode({
                    variables: {
                        code: promoCode,
                    },
                })
                    .then(() => fetchCoursePriceInfo());
            } catch (err) {}
        }
    }, [promoCode]);

    const onBuy = (emailConfirm = '') => {
        history.push('/pay');
        return true;
        /*
        const {
            me: {
                email,
            } = {
                email: '',
            },
        } = userData;
        if (!email && !emailConfirm) {
            toggleEmailConfirmModal(true);
            return false;
        }
        if (email) {
            createPayment(null, counts);
            return true;
        }
        if (emailConfirm) {
            createPayment(emailConfirm, counts);
            toggleEmailConfirmModal(false);
            return true;
        }
        return false;
        */
    };

    const totalSum = useMemo(() => Object.keys(totalPrice ?? {}).reduce(
        (prevSum, key) => prevSum + (totalPrice?.[key] ?? 0),
        0,
    ), [totalPrice]);

    return (
        <>
            {children({
                onBuy,
                totalSum,
                totalPrice,
                promoPercent,
                promoIsActive,
                userDataLoaded: userData && !loading && !error,
                showPrivacy: () => togglePrivacy(true),
                showEmailConfirm: () => toggleEmailConfirmModal(true),
            })}
            <PrivacyModal
                isVisible={isPrivacyOpened}
                onClose={() => togglePrivacy(false)}
            />
            <ConfirmEmailModal
                isVisible={isEmailConfirmModalVisible}
                onClose={() => toggleEmailConfirmModal(false)}
                onOk={onBuy}
            />
        </>
    );
};

export default PaymentContainer;
