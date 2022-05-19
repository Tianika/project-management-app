import styled from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';
import { HeaderBackground } from '../welcomePageHeader/styles';

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 4rem;
  background: ${({ theme }: HeaderBackground) => theme};
  transition: 0.2s all;
  ${adaptive.maxWidth.tablet} {
    z-index: 15;
  }
`;

export const headerTheme = `
  ${colors.headerBg}
`;
