import { SubjectsEnum } from '@client/apollo/schemaTypes';

export type priceKeyType = {
    cost: number;
    options: number[];
};

export type optionalInfoType = null | {
    priceType: priceKeyType;
    title: string;
    labels: string[];
    link: string;
}

export interface CourseType {
    id: string;
    slug: SubjectsEnum;
    courseName: string;
    subjectName: string;
    teacher: {
        name: string;
        avatar: string;
    };
    price: priceKeyType;
    link: string;
    optionalInfo?: optionalInfoType;
}

export interface TotalType {
        sum: number;
        count: number;
        items: number;
}
