import {
    Course as CourseType, Lesson, Maybe, Module,
} from '@client/apollo/schemaTypes';
import { LabelProps } from '../components/Label';
import { TeacherProps } from '../components/Teacher';
import { AboutProps } from '../components/About';

export const calcLessonsByModules: (m: Maybe<Module>[]) => number = (modules) => {
    let counter = 0;
    modules.forEach((module) => {
        if (module && module.lessons) {
            counter += module.lessons.length;
        }
    });

    return counter;
};

export const renderLabelProps: (c: CourseType) => LabelProps = (course) => {
    const {
        id,
        title,
        cost,
        startsAt,
        endsAt,
        modules,
    } = course;

    return {
        id,
        title,
        cost,
        startsAt,
        endsAt,
        lessonsCount: calcLessonsByModules(modules || []),
    };
};

export const renderTeacherProps: (c: CourseType) => TeacherProps = (course) => {
    const {
        teacher: {
            name,
            avatar,
        },
    } = course;

    return {
        name: name || '',
        avatar: avatar || '',
    };
};

export const renderAboutProps: (c: CourseType) => AboutProps = (course) => {
    const {
        id,
        description,
        modules,
    } = course;

    return {
        courseId: id,
        description: description || '',
        modules: modules || [],
    };
};
