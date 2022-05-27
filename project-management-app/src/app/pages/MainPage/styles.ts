import styled from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';

export const MainPageContainer = styled.div`
  position: relative;
  background-color: ${colors.secondaryBg};
  font-size: 20px;
  min-height: calc(100vh - 4.1rem);

  ${adaptive.maxWidth.mobile} {
    min-height: calc(100vh - 4.7rem);
  }
`;
