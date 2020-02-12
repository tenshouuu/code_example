import { Discount, DiscountTypeEnum } from '@client/apollo/schemaTypes';
import moment from 'moment';

export {
    itemForms,
} from './textForms';

export const getPriceByPromo = ({
    price,
    basePrice,
    promoPercent,
}: {
    price: number;
    basePrice: number;
    promoPercent: number;
}) => {
    const totalPercent = 100 - promoPercent;
    const promoTotalPrice = +((basePrice * totalPercent) / 100).toFixed();
    return promoTotalPrice < price ? promoTotalPrice : price;
};

export const handleCalculateTotalPrice: (p: {
    oldTotal: number;
    price: number;
    count: number;
    discount: Discount;
    setNewTotal(n: number): void;
    promoPercent?: number;
}) => void = ({
    oldTotal,
    price,
    count,
    discount,
    setNewTotal,
    promoPercent = 0,
}) => {
    const basePrice = 2000 * count;
    let newTotalPrice = price * count;
    if (count === 3) {
        newTotalPrice = getPriceByPromo({
            basePrice,
            price: 4800,
            promoPercent,
        });
    }
    if (count === 6) {
        newTotalPrice = getPriceByPromo({
            basePrice,
            price: 7800,
            promoPercent,
        });
    }
    if (discount?.type && discount?.expiredAt) {
        const mNow = moment();
        const mExpiredAt = moment.utc(discount.expiredAt, 'YYYY-MM-DD HH:mm:ss');
        if (mExpiredAt.isAfter(mNow)) {
            switch (discount.type) {
                case DiscountTypeEnum.YearDiscount:
                    if (count === 3) {
                        newTotalPrice = getPriceByPromo({
                            basePrice,
                            price: 4800,
                            promoPercent,
                        });
                    }
                    if (count === 6) {
                        newTotalPrice = getPriceByPromo({
                            basePrice,
                            price: 5000,
                            promoPercent,
                        });
                    }
                    break;
                case DiscountTypeEnum.MonthMinus:
                case DiscountTypeEnum.MonthDiscount:
                default:
                    if (count === 3) {
                        newTotalPrice = getPriceByPromo({
                            basePrice,
                            price: 4800,
                            promoPercent,
                        });
                    }
                    if (count === 6) {
                        newTotalPrice = getPriceByPromo({
                            basePrice,
                            price: 7800,
                            promoPercent,
                        });
                    }
                    break;
            }
        }
    }

    if (newTotalPrice !== oldTotal) {
        setNewTotal(newTotalPrice);
    }
};
