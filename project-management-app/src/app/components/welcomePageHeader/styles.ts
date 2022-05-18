import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../../styles/colors';

export const HeaderWrapper = styled.header`
  background: ${colors.secondaryBg};
`;

export const HeaderLink = styled(NavLink)`
  border-radius: 10px;
  margin: 1rem;
  border: none;
  color: ${colors.lightFont};
  &:hover {
    transform: scale(1, 1.5);
    transition: 0.2s all;
  }
  &:active {
    transform: translateY(3px);
    transition: 0.2s all;
    color: ${colors.darkFont};
  }
`;

export const HeaderSeparator = styled.span`
  color: ${colors.lightFont};
`;
