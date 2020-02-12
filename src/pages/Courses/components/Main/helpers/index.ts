import { PaymentProps } from '@client/components/Payment';
import { ContentProps } from '../components/Content';
import { GetPrivateCourseDataResponse } from '../schemas/getPrivateCourseData';

export const getContentProps: (p: GetPrivateCourseDataResponse) => ContentProps = ({
    course,
    userCourses,
}) => ({
    course: course ?? null,
    subscriptionExpiredAt: userCourses?.[0]?.subscriptionExpiredAt ?? '',
    subscriptionStartedAt: userCourses?.[0]?.subscriptionStartedAt ?? '',
});

export const getPaymentProps: (p: GetPrivateCourseDataResponse) => PaymentProps = ({
    course,
    userCourses,
}) => ({
    courseId: course?.id ?? '',
    cost: course?.cost ?? 0,
    subscriptionExpiredAt: userCourses?.[0]?.subscriptionExpiredAt ?? '',
});
