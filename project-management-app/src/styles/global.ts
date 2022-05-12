import styled, { keyframes } from 'styled-components';

import { adaptive } from './adaptive';
import { colors } from './colors';

export const styles = {
  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },

  fonts: {
    fontFamily: 'Rubik',
    footerSize: '24px',
    headerSize: '28px',
  },
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
  ${adaptive.maxWidth.mobile} {
    padding: 0 1rem;
  }
`;

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
