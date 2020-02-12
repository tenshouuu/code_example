import { useMutation } from '@apollo/react-hooks';
import { buyCourses } from '../schemas';

interface UseStandardPayment {
    createPayment(email: string | null, countByCourseIds: { [key: string]: number }): void;
}

interface BuyCoursesVars {
    courses: string;
    email?: string;
}

export default function useStandardPayment(): UseStandardPayment {
    const [fetchBuyCourse] = useMutation(buyCourses);

    const createPayment: UseStandardPayment['createPayment'] = (email, countByCourseIds = {}) => {
        localStorage.setItem('phone_preview', '1'); // disable LastHopeModal on MakeupLayout

        const paymentWindowDescriptor = window.open('/redirect', '_blank');

        const variables: BuyCoursesVars = {
            courses: JSON.stringify(countByCourseIds),
        };
        if (email) {
            variables.email = email;
        }

        fetchBuyCourse({
            context: {
                timeout: 30000,
            },
            variables,
        }).then((resp) => {
            const link = resp?.data?.buyCourse || '';
            if (paymentWindowDescriptor) paymentWindowDescriptor.location.href = link;
        });
    };

    return { createPayment };
}
