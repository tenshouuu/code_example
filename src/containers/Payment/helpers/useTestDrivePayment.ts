import { useMutation } from '@apollo/react-hooks';
import { buyCourseTestDrive } from '../schemas';

interface UseTestDrivePayment {
    createPayment(email: string | null, countByCourseIds: { [key: string]: number }): void;
}

interface BuyCoursesVars {
    courseId: string;
    email?: string;
}

export default function useTestDrivePayment(): UseTestDrivePayment {
    const [fetchBuyTestDrive] = useMutation(buyCourseTestDrive);

    const createPayment: UseTestDrivePayment['createPayment'] = (email, countByCourseIds) => {
        localStorage.setItem('phone_preview', '1'); // disable LastHopeModal on MakeupLayout

        const paymentWindowDescriptor = window.open('/redirect', '_blank');

        const variables: BuyCoursesVars = {
            courseId: Object.keys(countByCourseIds)?.[0],
        };
        if (email) {
            variables.email = email;
        }

        fetchBuyTestDrive({
            context: {
                timeout: 30000,
            },
            variables,
        }).then((resp) => {
            const link = resp?.data?.buyCourseTestDrive || '';
            if (paymentWindowDescriptor) paymentWindowDescriptor.location.href = link;
        });
    };

    return { createPayment };
}
