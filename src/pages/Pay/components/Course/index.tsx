import React, {
    useState, FunctionComponent,
} from 'react';

import { Course as CourseType } from '@client/apollo/schemaTypes';
import { SubjectProvider } from '@client/ui/components';
import { PaymentContainer } from '@client/containers';

import {
    AddArea,
    CourseRoot,
    Price,
    Close,
    CourseWrapper,
    CloseWrapper,
    CourseInfo,
    StyledSubject,
    StyledButton,
    StyledAvatarBlock,
} from './styled';
import {
    Select,
    SpecialOffer,
} from './components';

export interface CourseProps {
    disabled?: boolean;
    isTestDrive?: boolean;
    courseData: CourseType;
    setCount(v: number): void;
}

export type selectOptionsType = number[];

const selectOptions: selectOptionsType = [1, 3, 6];

type Props = CourseProps;

const Course: FunctionComponent<Props> = (props) => {
    const {
        disabled = false,
        courseData,
        setCount,
        isTestDrive,
    } = props;
    const [state, setState] = useState<{
        count: number;
    }>({
        count: selectOptions[0],
    });
    const {
        count,
    } = state;
    const {
        id,
        cost,
        title,
        subject,
        teacher,
    } = courseData;

    const handleSetCount = (value: number) => {
        if (value !== count) {
            setState({
                count: value,
            });
            setCount(value);
        }
    };

    return (
        <PaymentContainer
            courseIds={[id]}
            costs={{ [id]: cost }}
            counts={{ [id]: count }}
            promoCode=""
            paymentType="test-drive"
        >
            {({
                onBuy,
                totalSum,
            }) => (
                <CourseRoot disabled={disabled}>
                    <CourseWrapper disabled={disabled}>
                        <SubjectProvider value={{
                            subjectType: subject?.slug ?? 'rus',
                        }}
                        >
                            <CourseInfo>
                                <StyledSubject />
                                <div>
                                    <p>{subject?.name ?? 'Предмет'}</p>
                                    <h4>{title}</h4>
                                </div>
                            </CourseInfo>
                            <StyledAvatarBlock
                                name={teacher?.name ?? ''}
                                img={teacher?.avatar ?? ''}
                                label="Преподаватель"
                            />
                            <Select
                                options={selectOptions}
                                showArrow={false}
                                selectedValue={count}
                                selectValue={handleSetCount}
                            />
                            <Price>{`${totalSum || '...'} р.`}</Price>
                            <CloseWrapper>
                                <Close />
                            </CloseWrapper>
                        </SubjectProvider>
                    </CourseWrapper>
                    {
                        isTestDrive && count === 1
                            ? (
                                <SpecialOffer
                                    onBuy={onBuy}
                                />
                            )
                            : null
                    }
                    <AddArea>
                        <StyledButton>Добавить курс</StyledButton>
                    </AddArea>
                </CourseRoot>
            )}
        </PaymentContainer>
    );
};

export default Course;
