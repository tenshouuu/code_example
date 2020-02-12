import useStandardPayment from './useStandardPayment';
import useTestDrivePayment from './useTestDrivePayment';

export type PaymentType = 'standard' | 'test-drive';

const paymentFactory = (paymentType: PaymentType) => {
    switch (paymentType) {
        case 'standard':
            return useStandardPayment;
        case 'test-drive':
            return useTestDrivePayment;
        default:
            return useStandardPayment;
    }
};

export default paymentFactory;
