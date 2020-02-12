import styled, { css } from 'styled-components';
import { createTypographyStyleByName, getColorByName, getMediaWidthByName } from '@client/helpers';
import { Icon, LinkButton } from '@client/ui/components';

export const AvatarImage = styled.img<{src: string|null}>`
    width: 100%;
    position: relative;
`;

export const Avatar = styled.div`
    width: calc(138px + 1vw);
    min-height: calc(138px + 1vw);
    border-radius: 0 0 50% 50%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: flex-end;

    &:before {
        content: '';
        width: 100%;
        height: calc(138px + 1vw);
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 50%;
        background-color: ${getColorByName('gray')};
    }

`;
export const AvatarWrapper = styled.div`
    margin-right: 20px;
    display: flex;
    justify-content: flex-end;
`;

export const Star = styled(Icon.Star)`
    width: 14px;
    color: ${getColorByName('purple')};

    &:not(:last-child) {
        margin-right: 8px;
    }
`;

export const StarsWrapper = styled.div`
    margin-bottom: 14px;
`;

export const Ege = styled.div`
    margin-bottom: 14px;

    & > p {
        ${createTypographyStyleByName('paragraph3')};
        color: ${getColorByName('darkBlue')}
    }

    & p + p {
        margin-top: 8px;
    }
`;

export const Info = styled.div``;
export const Name = styled.h4`
    margin-bottom: 10px;
    ${createTypographyStyleByName('header5')};
    color: ${getColorByName('darkBlue')};
`;
export const StyledLinkButton = styled(LinkButton)`
    visibility: hidden;
    min-width: 154px;
    height: auto;
    margin-bottom: 6px;

    @media (max-width: ${getMediaWidthByName('desktopMini')}) {
        min-width: auto;
    }
`;

function renderAccessStyles({ isAccess }) {
    return isAccess ? css`
        flex-direction: row-reverse;
        background-color: ${getColorByName('gray')};
        border-radius: 6px;
        padding: 20px 16px 20px 24px;

        ${Info} {
            flex: 1;
            margin-right: 12px;
        }

        ${Name} {
            margin-top: 6px;
        }

        ${AvatarWrapper} {
            margin-right: 0;
        }

        ${Avatar} {
            &:before {
                background-color: ${getColorByName('white')};
            }

            @media (max-width: ${getMediaWidthByName('desktopMini')}) {
                width: calc(100px + 1vw);
                min-height: calc(100px + 1vw);

                &:before {
                    height: calc(100px + 1vw);
                }
            }

            @media (max-width: ${getMediaWidthByName('tabletFull')}) {
                width: calc(90px + 1vw);
                min-height: calc(90px + 1vw);

                &:before {
                    height: calc(90px + 1vw);
                }
            }
        }

        ${StyledLinkButton} {
            background-color: ${getColorByName('white')};
        }
    ` : css``;
}

export const TeacherRoot = styled.div<{ isAccess: boolean }>`
    display: flex;
    align-items: flex-start;
    ${renderAccessStyles}
`;
