import React, { FunctionComponent, useCallback } from 'react';
import { Maybe, Course as CourseType } from '@client/apollo/schemaTypes';
import { CountObjType, IsTestDriveObjType } from '@client/pages/Pay';
import {
    BasketRoot,
    CourseArea,
    EmptyBlock,
} from './styled';
import Course from '../Course';

interface OwnProps {
    countObj: CountObjType;
    isTestDriveObj: IsTestDriveObjType;
    courses: Maybe<CourseType>[];
    setCountObj(v: CountObjType): void;
}

type Props = OwnProps;

const Basket: FunctionComponent<Props> = ({
    courses, countObj, setCountObj, isTestDriveObj,
}) => {
    const handleSetCount = useCallback((id: string) => (count: number) => {
        setCountObj({
            ...countObj,
            [id]: count,
        });
    }, [countObj]);
    return (
        <BasketRoot>
            <h2>Твоя корзина</h2>
            <CourseArea>
                {courses && courses?.length > 0 ? courses.map(course => (
                    course ? (
                        <Course
                            key={course.id}
                            courseData={course}
                            setCount={handleSetCount(course.id)}
                            isTestDrive={!isTestDriveObj[course.id]}
                        />
                    ) : null
                )) : <EmptyBlock>тут ничего нет :с</EmptyBlock>}
            </CourseArea>
        </BasketRoot>
    );
};

export default Basket;
