import React, { FunctionComponent } from 'react';

import { Icon } from '@client/ui/components';

import {
    DescriptionRoot,
    PaymentItem,
    BottomGradient,
    PaymentsBox,
} from './styled';

const Description: FunctionComponent = () => (
    <DescriptionRoot>
        <h2>Учись с Example</h2>
        <p>Вы будете перенаправлены на сайт платежной системы.</p>
        <p>Как правило, после оплаты деньги поступают на счет в течение минуты.</p>
        <p>
            В зависимости от выбранного способа оплаты,
           срок зачисления средств на баланс может составить
             до двух часов.
        </p>
        <PaymentsBox>
            <PaymentItem>
                <Icon.VisaVerified />
            </PaymentItem>
            <PaymentItem>
                <Icon.MasterCardSecure />
            </PaymentItem>
            <PaymentItem>
                <Icon.Visa />
            </PaymentItem>
            <PaymentItem>
                <Icon.MasterCard />
            </PaymentItem>
        </PaymentsBox>
        <BottomGradient />
    </DescriptionRoot>
);

export default Description;
