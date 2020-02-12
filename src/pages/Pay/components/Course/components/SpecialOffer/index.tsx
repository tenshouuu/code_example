import React, { FunctionComponent } from 'react';

import {
    SpecialOfferRoot,
    Description,
    BuyBlock,
    Header,
    Price,
    Button,
} from './styled';

export interface SpecialOfferProps {
    onBuy(): void;
}
const SpecialOffer: FunctionComponent<SpecialOfferProps> = ({ onBuy }) => (
    <div>
        <SpecialOfferRoot>
            <Description>
                <Header>
                        Попробуй группу полного погружения на неделю
                </Header>
            </Description>
            <BuyBlock>
                <Price>
                    200 р.
                </Price>
                <Button
                    onClick={() => { onBuy(); }}
                >
                    Купить
                </Button>
            </BuyBlock>
        </SpecialOfferRoot>
    </div>
);

export default SpecialOffer;
