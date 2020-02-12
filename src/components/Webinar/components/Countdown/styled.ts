import styled from 'styled-components';
import { createTypographyStyleByName, getColorByName, getMediaWidthByName } from '@client/helpers';

export const CountdownRoot = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: min-content;
`;

export const Title = styled.p`
  width: 100%;
  ${createTypographyStyleByName('paragraph3')};
  color: ${getColorByName('darkGray')};

  @media (max-width: ${getMediaWidthByName('mobile')}) {
      margin-bottom: .25rem;
  }
`;

export const TimerPart = styled.div`
    position: relative;
    height: max-content;
`;

export const Timer = styled.div`
    display: flex;
    flex-direction: row;

    ${createTypographyStyleByName('header3')};
    color: ${getColorByName('darkBlue')};

    & > ${TimerPart}:not(:last-child) {
        margin-right: 1rem;

        &:after {
            content: ":";
            position: absolute;
            bottom: 0;
            right: -.65rem;
        }

        @media (max-width: ${getMediaWidthByName('mobile')}) {
          margin-right: .5rem;

            &:after {
                right: -.35rem;
            }
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        ${createTypographyStyleByName('header5')};
    }
`;

export const Count = styled.span`
    width: min-content;
    margin-right: .5rem;
    color: ${getColorByName('purple')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-right: .2rem;
    }
`;

export const Period = styled.span`
    width: min-content;
`;
