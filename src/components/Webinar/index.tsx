/* eslint-disable max-len */
import React, {
    FunctionComponent, useCallback, useEffect, useState,
} from 'react';
import { useMediaQuery } from 'react-responsive';
import { LocationDescriptorObject, Path } from 'history';

import { Lesson, Maybe } from '@client/apollo/schemaTypes';
import { Skeleton } from '@client/ui/components';
import { theme } from '@client/helpers';

import { useHistory } from 'react-router';
import moment from 'moment';
import {
    WebinarRoot,
    PreviewArea,
    Play,
    Preview,
    Label,
    Info,
    Title,
    Panel,
    Item,
    Description,
    StyledAvatarBlock,
    StyledLink,
    StyledButton,
    SvgPreview,
    StyledCountdown,
} from './styled';
import { Timer } from './components';

type webinarDesktopType = 'horizontalLarge' | 'verticalLarge' | 'simple';
type webinarMobileType = 'roundedHorizontalSmall' | 'semiHorizontalSmall' | 'horizontalSmall';

export type MixedWebinarType = webinarDesktopType | webinarMobileType;

export interface WebinarProps {
    data: Maybe<Lesson>;
    loading?: boolean;
    customPath?: LocationDescriptorObject;
    desktopType: MixedWebinarType;
    mobileType?: MixedWebinarType;
    isForceMobileType?: boolean;
    subscriptionLink?: string;
    handleClick?(callback: () => void): void;
}

type Props = WebinarProps;

const Webinar: FunctionComponent<Props> = (props) => {
    const {
        data,
        loading = false,
        desktopType,
        mobileType,
        customPath,
        isForceMobileType = false,
        subscriptionLink = 'https://vk.com/app5898182_-184945497#s=449825',
        handleClick = (func) => { func(); },
        ...anotherProps
    } = props;
    const [isShowTimer, setIsShowTimer] = useState(false);
    const [isOnline, setIsOnline] = useState<boolean>(false);
    const isLoading = loading || !data;
    const history = useHistory();

    const isMobile = useMediaQuery({
        query: `(max-width: ${theme.tokens.mediaWidths.mobile}px)`,
    });

    const webinarType: MixedWebinarType = (isMobile || isForceMobileType)
        ? (mobileType || desktopType)
        : desktopType;

    const defaultLink: Path = `/lesson/${data?.id || ''}`;

    const onClickPreview = useCallback(() => handleClick(() => {
        if (customPath?.pathname) {
            history.push(customPath);
        } else {
            history.push(defaultLink);
        }
    }), [customPath, defaultLink, handleClick, history]);

    useEffect(() => {
        const now = moment();
        if (
            data?.webinar?.id
            && now.isAfter(moment.utc(data?.startedAt, 'YYYY-MM-DD HH:mm:ss'))
            && now.isBefore(moment.utc(data?.endedAt, 'YYYY-MM-DD HH:mm:ss'))
        ) {
            // eslint-disable-next-line no-unused-expressions
            !isOnline ? setIsOnline(true) : false;
        }
    }, [data, isOnline]);


    return (
        <WebinarRoot type={webinarType} {...anotherProps}>
            <PreviewArea onClick={onClickPreview}>
                {
                    isLoading
                        ? <Skeleton video loading active />
                        : (
                            <>
                                {data?.webinar?.preview
                                    ? <Preview src={data.webinar.preview} alt="preview" />
                                    : <SvgPreview preserveAspectRatio="xMidYMin meet" />}
                                <Play type="play" />
                                <Label
                                    show={isOnline}
                                >
                                    В эфире
                                </Label>
                            </>
                        )
                }
            </PreviewArea>
            <Info>
                {
                    isLoading
                        ? <Skeleton loading active rows={webinarType === 'horizontalSmall' ? 2 : 4} />
                        : (
                            <>
                                <Title title={data?.webinar?.name || 'Название отсутствует'}>
                                    {data?.webinar?.name || 'Название отсутствует'}
                                </Title>
                                <Description title={data?.title || ''}>
                                    {data?.title || ''}
                                </Description>
                                <StyledAvatarBlock
                                    name={data?.teacher?.name || ''}
                                    img={data?.teacher?.avatar || ''}
                                />
                                <Panel>
                                    <Item hide={isShowTimer}>
                                        <Timer
                                            startedAt={data?.startedAt || ''}
                                            endedAt={data?.endedAt || ''}
                                            duration={data?.duration || ''}
                                            onEnableTranslation={() => { setIsShowTimer(true); }}
                                            render={({
                                                label = 'Онлайн через',
                                                date = '00:00:00',
                                            }) => (
                                                <>
                                                    <p>{label}</p>
                                                    <h5>{date}</h5>
                                                </>
                                            )}
                                        />
                                    </Item>
                                    <Item>
                                        <p>Цена</p>
                                        <h5>Бесплатно</h5>
                                    </Item>
                                </Panel>
                                <StyledLink
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={subscriptionLink}
                                >
                                    <StyledButton>Записаться на вебинар</StyledButton>
                                </StyledLink>
                                {
                                    webinarType === 'simple'
                                        ? (
                                            <StyledCountdown
                                                title="До начала вебинара:"
                                                date={data?.startedAt || ''}
                                                format={['day', 'hour', 'minute']}
                                            />
                                        )
                                        : ''
                                }
                            </>
                        )
                }
            </Info>
        </WebinarRoot>
    );
};

export default Webinar;
