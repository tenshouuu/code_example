import styled from 'styled-components';
import { createTypographyStyleByName, getColorByName, getMediaWidthByName } from '@client/helpers';
import { LinkButton } from '@client/ui/components';

export const SpecialOfferRoot = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: normal;
  margin-top: 18px;
  border-radius: 5px;
  background-color: ${getColorByName('purple')};
  color: ${getColorByName('white')};
  ${createTypographyStyleByName('paragraph2')};

  @media (max-width: ${getMediaWidthByName('mobile')}) {
    flex-direction: column;
  }
`;

export const Description = styled.div`
  position: relative;

  flex-grow: 1;
  padding-left: 16px;
  padding-right: 80px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${getMediaWidthByName('mobile')}) {
    width: 100%;
    padding: 16px 24px;
    border-radius: 0 0 5px 5px;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translate(-50%, 0);
      border-left: 16px solid transparent;
      border-right: 16px solid transparent;
      border-bottom: 8px solid ${getColorByName('purple')};
    }
  }
`;

export const Header = styled.span`
  font-weight: bold;

  @media (max-width: ${getMediaWidthByName('mobile')}) {
    margin-bottom: 8px;
  }
`;

export const SaveMoney = styled.span`

`;

export const PricePerPeriod = styled.span`
  @media (max-width: ${getMediaWidthByName('mobile')}) {
    display: none;
  }
`;

export const BuyBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 16px;
  border-radius: 0 5px 5px 0;
  background-color: ${getColorByName('darkPurple')};

  @media (min-width: ${getMediaWidthByName('mobile')}) {
      &::after {
          content: "";
          display: block;
          width: 0;
          height: 0;
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translate(-50%, 0);
          border-left: 16px solid transparent;
          border-right: 16px solid transparent;
          border-bottom: 8px solid ${getColorByName('darkPurple')};
        }
  }


  @media (max-width: ${getMediaWidthByName('mobile')}) {
    justify-content: space-between;
    width: 100%;
    padding: 12px 24px;
    border-radius: 0 0 5px 5px;
  }
`;

export const Price = styled.span`
  padding-right: 12px;
  font-size: 1rem;
  line-height: 1rem;
`;

export const Button = styled(LinkButton)`
  padding: 4px 12px;
  font-size: .625rem;
  font-weight: bold;
  color: ${getColorByName('purple')};
  background-color: ${getColorByName('white')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
