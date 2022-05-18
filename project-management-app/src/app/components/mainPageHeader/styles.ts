import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 50px;
  background-color: ${colors.headerBg};
`;
