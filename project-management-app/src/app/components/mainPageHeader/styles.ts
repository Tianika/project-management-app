import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { HeaderBackground } from '../welcomePageHeader/styles';

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 15;

  display: flex;
  justify-content: end;
  align-items: center;
  height: 4rem;

  background: ${({ theme }: HeaderBackground) => theme};

  transition: 0.2s all;
`;

export const headerTheme = `
  ${colors.headerBg}
`;
