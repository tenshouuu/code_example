import { CourseType } from './types';

export {
    CourseType,
    TotalType,
    priceKeyType,
    optionalInfoType,
} from './types';

export {
    default as handleCalculateTotalPrice,
} from './calculateTotalPrice';

export const constructCourse: (course: any) => CourseType = course => ({
    id: course.id,
    slug: course.subject.slug,
    courseName: course.title,
    subjectName: course.subject.name,
    teacher: course.teacher,
    cost: course.cost,
    price: {
        cost: course.cost,
        options: [1, 3, 6],
    },
    link: '#',
});

export { default as paymentFactory } from './paymentFactory';
