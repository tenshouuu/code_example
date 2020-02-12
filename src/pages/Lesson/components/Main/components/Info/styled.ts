import styled from 'styled-components';
import { createTypographyStyleByName, getColorByName, getFamilyByName } from '@client/helpers';

export const InfoRoot = styled.section`
    display: flex;

    & > div {
        display: flex;
        flex-direction: column;
        width: 100%;

        & > h4 {
            margin-bottom: 16px;
            ${createTypographyStyleByName('header4')};
            color: ${getColorByName('darkBlue')};
        }

        & > p,
        & > div > p {
            color: ${getColorByName('darkGray')};
            ${createTypographyStyleByName('paragraph3')}
        }

        & > p:nth-child(2) {
            margin-bottom: 16px;

            & > span:last-child {
                color: ${getColorByName('purple')};
                font-family: ${getFamilyByName('medium')};
            }
        }

        & > div {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            & > *:first-child {
                & > *:first-child {
                    width: 70px;
                    min-width: 70px;
                    height: 70px;
                }

                & p:first-child {
                    ${createTypographyStyleByName('paragraph3')}
                }

                & p:last-child {
                    ${createTypographyStyleByName('header4')}
                }
            }
        }

        & > div > p:last-child {
            margin-top: 16px;
        }
    }
`;
