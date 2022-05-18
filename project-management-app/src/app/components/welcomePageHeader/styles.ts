import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../../styles/colors';
import { Wrapper } from '../../../styles/global';
import { adaptive } from '../../../styles/adaptive';

export type HeaderBackground = {
  theme?: string;
};

export const HeaderWrapper = styled.header`
  top: 0;
  position: sticky;
  background: ${({ theme }: HeaderBackground) => theme};
  transition: 0.2s all;
  height: 4rem;
  padding: 0 1rem;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
`;

export const headerTheme = `
  ${colors.secondaryBg}
`;

export const activeHeaderTheme = `
  ${colors.inputHoverBorder}
`;

export const LinksWrapper = styled(Wrapper)`
  ${adaptive.maxWidth.mobile} {
    visibility: hidden;
  }
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
