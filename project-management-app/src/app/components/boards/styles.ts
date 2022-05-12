import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const BoardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  padding: 20px 50px;
`;

export const BoardsTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${colors.lightFont};
`;
