import React, { FunctionComponent } from 'react';

import { StyledPrices } from './styled';
import { Container } from './components';


const Prices: FunctionComponent = () => (
    <StyledPrices>
        <Container
            title="Годовая оплата"
            label="Подписка на все предметы"
            price="2400"
            period="месяц"
            link="/pay"
        />
        <Container
            title="Ежемесячная оплата"
            label="Подписка на все предметы"
            price="2400"
            period="месяц"
            link="/pay"
        />
    </StyledPrices>
);

/*
<Container
            title="Фулл пас"
            label="Подписка на все предметы"
            price="4599"
            period="месяц"
            link="/pay"
        />
<Container
            title="Скидка 5%"
            label="На покупку курса после просмотра вводного урока"
            price=""
            link="/pay"
/>
* */

export default Prices;
