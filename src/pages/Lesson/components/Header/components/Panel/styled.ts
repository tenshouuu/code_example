/* eslint-disable max-len */
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { createTypographyStyleByName, getColorByName, getFamilyByName } from '@client/helpers';

export const PanelRoot = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    & > li {
        margin-right: .8rem;

        &:last-child {
            margin-right: 0;
        }
    }
`;

export const NavItem = styled(NavLink)`
    position: relative;
    border-radius: 20px;
    padding: .5rem 1.2rem;
    background-color: ${getColorByName('white')};
    color: ${getColorByName('purple')};
    ${createTypographyStyleByName('paragraph3')};
    font-family: ${getFamilyByName('medium')};

    &.${props => props.activeClassName} {
        background-color: ${getColorByName('purple')};
        color: ${getColorByName('white')};

        &::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translate(-50%, 0);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 5px solid ${getColorByName('purple')};
        }
    }
`;

NavItem.defaultProps = {
    activeClassName: 'active',
};
