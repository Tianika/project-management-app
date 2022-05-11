import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';

export const LoadingAnimation = keyframes`
   to {
    -webkit-transform: rotate(360deg);
  }
`;

export const LoadingWrapper = styled.div`
  display: block;
  width: 2rem;
  height: 2rem;
  border: 0.2rem solid ${colors.headerBg};
  border-radius: 50%;
  border-top-color: ${colors.lightFont};
  animation: ${LoadingAnimation} 1s ease-in-out infinite;
`;
