import React, { FunctionComponent, useCallback, useState } from 'react';
import {
    useLazyQuery, useMutation, useQuery, WithApolloClient,
} from 'react-apollo';
import { useHistory, useLocation } from 'react-router-dom';

import { UserHandlerChildProps } from '@client/containers/UserInformer';
import { Query, SubjectsEnum } from '@client/apollo/schemaTypes';
import { setGrade, setSubjects } from '@client/containers/SubjectsClassSaver/schemas';
import { submitOnboard } from '@client/pages/Onboard/components/Content/components/Finish/schemas';
import { getUserInfo } from '@client/containers/UserInformer/schemas';
import { Spin } from '@client/ui/components';
import { LoadingWrapper } from '@client/containers/LoginChecker';
import { getLessonSubject } from './schemas';

export type withConfirmCheckerProps = WithApolloClient<
    UserHandlerChildProps
>;
const baseSlugArray: string[] = [SubjectsEnum.Math, SubjectsEnum.Rus];
function withConfirmChecker(Component) {
    // eslint-disable-next-line max-len
    const ConfirmChecker: FunctionComponent<withConfirmCheckerProps> = (props) => {
        const location = useLocation();
        const { pathname = '' } = location;
        const history = useHistory();
        const [loading, setLoading] = useState(true);
        const [fetchSubmitOnboard] = useMutation(submitOnboard, {
            refetchQueries: [
                {
                    query: getUserInfo,
                },
            ],
        });
        const [fetchSetSubjects] = useMutation(setSubjects);
        const [fetchSetGrade] = useMutation(setGrade);

        const urlParams = new URLSearchParams(window.location.search);
        const urlSlug = urlParams.get('slug');
        const [initSlugArray, setInitSlugArray]  = useState<string[]>(() => {
            const state: string[] = [...baseSlugArray];
            if (urlSlug) {
                state.push(urlSlug);
            }
            return state;
        });

        const promoValue = urlParams.get('promo');
        const loghashValue = urlParams.get('loghash');
        const idsValue = urlParams.get('ids[]');
        const isPromo = promoValue === '1' || idsValue || loghashValue;

        const handleSetUserData = useCallback(async (newSlugs: string[] = [], newGrade?: number) => {
            await Promise.all<any>([
                newGrade
                    ? fetchSetGrade({
                        variables: {
                            grade: newGrade,
                        },
                    })
                    : Promise.resolve(true),
                newSlugs.length > 0
                    ? fetchSetSubjects({
                        variables: {
                            subjectSlugArray: newSlugs,
                        },
                    }).catch(() => fetchSetSubjects({
                        variables: {
                            subjectSlugArray: baseSlugArray,
                        },
                    }))
                    : Promise.resolve(true),
            ]);
            return fetchSubmitOnboard().finally(() => setLoading(false));
        }, [setLoading]);

        const [fetchGetLessonSubject] = useLazyQuery(getLessonSubject, {
            onCompleted: async (data) => {
                const { lesson } = data;
                await handleSetUserData(
                    lesson?.subject?.slug ? [...initSlugArray, lesson.subject.slug] : initSlugArray,
                    11
                );
            },
            onError: async () => {
                await handleSetUserData(initSlugArray, 11);
            },
        });

        useQuery<{
            me: Query['user'];
        }>(getUserInfo, {
            onCompleted: async ({ me }) => {
                function setSubjectBySlugUrl() {
                    if (urlSlug) {
                        const newSlugsArray: string[] = [urlSlug];
                        if (me?.subjects && me.subjects.length > 0) {
                            me.subjects.forEach(({ slug }) => {
                                if (slug && (slug !== urlSlug)) {
                                    newSlugsArray.push(slug);
                                }
                            });
                        }
                        return fetchSetSubjects({
                            variables: {
                                subjectSlugArray: newSlugsArray,
                            },
                        }).finally(() => setLoading(false));
                    }
                    setLoading(false);
                    return Promise.resolve(true);
                }
                if (me && pathname && !isPromo) {
                    setLoading(false);
                    if (me.onboardingCompleted) {
                        if (pathname.startsWith('/onboard')) {
                            history.push('/dashboard');
                        } else if (pathname.startsWith('/auth')) {
                            history.push('/onboard/start');
                        } else {
                            await setSubjectBySlugUrl();
                        }
                    } else if (!pathname.startsWith('/onboard')) {
                        history.push('/onboard');
                    }
                } else if (!pathname.startsWith('/onboard') && me && !me.onboardingCompleted) {
                    if (isPromo) {
                        const baseUrl = '/lesson/';
                        if (pathname.startsWith(baseUrl) && baseUrl.length < pathname.length) {
                            setLoading(false);
                            const lessonId = pathname.replace(baseUrl, '');
                            if (me?.subjects && me.subjects.length > 0) {
                                const userSlugs = me?.subjects.map(({ slug }) => slug ?? '');
                                setInitSlugArray(userSlugs);
                            }
                            fetchGetLessonSubject({
                                variables: {
                                    id: lessonId,
                                },
                            });
                        } else {
                            if (me?.subjects && me.subjects.length > 0) {
                                // skipping slugs setting
                                await handleSetUserData([], 11);
                            } else {
                                await handleSetUserData(initSlugArray, 11);
                            }
                        }
                    } else {
                        setLoading(false);
                        history.push('/onboard');
                    }
                } else {
                    await setSubjectBySlugUrl();
                }
            },
        });

        if (loading) {
            return (
                <LoadingWrapper>
                    <div>
                        <Spin />
                        <span>Подгружаемся...</span>
                    </div>
                </LoadingWrapper>
            );
        }

        return (
            <>
                <Component {...props} />
            </>
        );
    };

    return ConfirmChecker;
}

export default Component => withConfirmChecker(Component);
