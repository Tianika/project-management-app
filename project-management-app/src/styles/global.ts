import styled from 'styled-components';
import { adaptive } from './adaptive';

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
