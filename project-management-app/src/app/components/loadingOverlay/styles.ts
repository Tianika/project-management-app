import styled, { keyframes } from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';

export const LoadingAnimation = keyframes`
   to {
    -webkit-transform: rotate(360deg);
  }
`;

export const LoadingOverlayWrapper = styled.div`
  display: inline-block;
  width: 8rem;
  height: 8rem;
  border: 1rem solid ${colors.headerBg};
  border-radius: 50%;
  border-top-color: ${colors.lightFont};
  animation: ${LoadingAnimation} 1s ease-in-out infinite;
  position: fixed;
  top: 40%;
  left: 45%;
  ${adaptive.maxWidth.mobile} {
    left: 40%;
  }
`;
