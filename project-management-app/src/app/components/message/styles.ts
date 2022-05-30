import styled from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 30vw;
  min-height: 20vh;
  font-size: 1.2em;
  border-radius: 10px;
  color: ${colors.secondaryBg};
  background-color: ${colors.baseBg};
  padding: 1em;

  ${adaptive.maxWidth.tablet} {
    width: 50vw;
  }

  ${adaptive.maxWidth.mobile} {
    width: 75vw;
  }
`;
