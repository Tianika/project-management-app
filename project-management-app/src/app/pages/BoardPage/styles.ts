import styled from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';

export const BoardPageContainer = styled.div`
  position: relative;
  background-color: ${colors.secondaryBg};
  font-size: 20px;
  height: calc(100vh - 4.1rem);

  ${adaptive.maxWidth.mobile} {
    height: calc(100vh - 4.7rem);
  }
`;
