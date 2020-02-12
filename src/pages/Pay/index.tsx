import React, {
    FunctionComponent, useMemo, useState,
} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { Skeleton } from '@client/ui/components';

import { StaticContext } from 'react-router';
import {
    PayRoot,
    Wrapper,
    EmptyArea,
    LoadingRoot,
} from './styled';
import {
    Basket,
    Description,
    Total,
} from './components';
import { getPayData } from './schemas';
import {
    GetPayDataResponse,
    GetPayDataVariables,
} from './schemas/getPayData';

type Props = RouteComponentProps<{}, StaticContext, { ids: [string]}>;

export type CountObjType = { [key: string]: number };
export type IsTestDriveObjType = { [key: string]: string | null };

const courseIdsFromHref: string[] | null = new URL(window.location.href).searchParams.getAll('ids[]');
const courseIdsObj = {};
const filteredCourseIdsFromHref = courseIdsFromHref.filter((id) => {
    if (!courseIdsObj[id]) {
        courseIdsObj[id] = true;
        return true;
    }
    return false;
});

const Pay: FunctionComponent<Props> = (props) => {
    const { location, history } = props;
    if (!location?.state?.ids && filteredCourseIdsFromHref.length === 0) {
        history.push('/dashboard');
    }

    const [countObj, setCountObj] = useState<CountObjType>({});

    // eslint-disable-next-line max-len
    const { data, loading } = useQuery<GetPayDataResponse, GetPayDataVariables>(getPayData, {
        skip: !location?.state?.ids && filteredCourseIdsFromHref.length < 1,
        variables: {
            ids: location?.state?.ids ?? filteredCourseIdsFromHref,
        },
        onCompleted: ({ courses }) => {
            if (courses?.data && courses.data?.length > 0) {
                const newCountObj: CountObjType = {};
                courses.data.forEach((course) => {
                    if (course?.id) {
                        newCountObj[course.id] = 1;
                    }
                });
                setCountObj(newCountObj);
            }
        },
        onError: () => {
            // history.push('/dashboard');
        },
    });

    const courseData = data?.courses?.data;
    const isTestDriveObj = useMemo(() => {
        const newIsTestDriveObj: IsTestDriveObjType = {};
        if (data?.userCourses) {
            data.userCourses.forEach((subCourseInfo) => {
                if (subCourseInfo?.course?.id) {
                    newIsTestDriveObj[subCourseInfo.course.id] = subCourseInfo?.subscriptionExpiredAt ?? null;
                }
            });
        }
        return newIsTestDriveObj;
    }, [data?.userCourses]);

    if (!courseData || loading) {
        return (
            <LoadingRoot>
                <Skeleton loading active rows={5} />
                <Skeleton loading active rows={5} />
            </LoadingRoot>
        );
    }
    return (
        <PayRoot>
            <Wrapper>
                <div>
                    <Basket
                        countObj={countObj}
                        courses={courseData}
                        setCountObj={setCountObj}
                        isTestDriveObj={isTestDriveObj}
                    />
                    <EmptyArea />
                </div>
                <div>
                    <Total
                        countObj={countObj}
                        courses={courseData}
                        isTestDriveObj={isTestDriveObj}
                    />
                    <Description />
                </div>
            </Wrapper>
        </PayRoot>
    );
};


export default Pay;
