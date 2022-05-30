import styled from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';

export const BoardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 50px;

  ${adaptive.maxWidth.tablet} {
    padding: 15px;
  }

  ${adaptive.maxWidth.mobile} {
    padding: 10px;
  }
`;

export const BoardsTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${colors.lightFont};

  ${adaptive.maxWidth.tablet} {
    font-size: 30px;
  }

  ${adaptive.maxWidth.mobile} {
    font-size: 28px;
  }
`;
