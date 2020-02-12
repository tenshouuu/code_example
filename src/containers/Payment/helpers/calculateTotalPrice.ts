import { Discount, DiscountTypeEnum } from '@client/apollo/schemaTypes';
import moment from 'moment';

export const getPriceByPromo = ({
    price,
    basePrice,
    promoPercent,
}: {
    price: number;
    basePrice: number;
    promoPercent: number | null;
}) => {
    if (!promoPercent || (promoPercent && promoPercent > 100)) {
        return price;
    }
    let newProcent = promoPercent;
    if (promoPercent > 100) {
        newProcent = 100;
    }

    if (promoPercent < 0) {
        newProcent = 0;
    }
    const totalPercent = 100 - newProcent;
    const promoTotalPrice = +((basePrice * totalPercent) / 100).toFixed();
    return promoTotalPrice < price ? promoTotalPrice : price;
};

const handleCalculateTotalPrice: (p: {
    price: number;
    count: number;
    discount: Discount;
    promoPercent?: number | null;
}) => number = ({
    price,
    count,
    discount,
    promoPercent = null,
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

    return newTotalPrice;
};

export default handleCalculateTotalPrice;
