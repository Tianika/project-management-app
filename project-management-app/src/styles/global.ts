import styled, { keyframes } from 'styled-components';

import { adaptive } from './adaptive';
import { colors } from './colors';

import deleteIcon from '../assets/svg/delete.svg';
import editIcon from '../assets/svg/edit.svg';

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
    transform: rotate(360deg);
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

export const ColumnCenteredWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
`;

export const H1 = styled.h1`
  padding: 2rem;

  font-size: 1.5em;
  font-style: italic;
  color: ${colors.secondaryBg};
  text-decoration: underline;
  text-align: center;
`;

export const Loading = styled.div`
  display: block;
  width: 2rem;
  height: 2rem;
  border: 0.2rem solid ${colors.headerBg};
  border-radius: 50%;
  border-top-color: ${colors.lightFont};
  animation: ${LoadingAnimation} 1s ease-in-out infinite;
`;

export const LoadingDark = styled(Loading)`
  border-top-color: ${colors.inputHoverBorder};
`;

export const BoardButton = styled.button`
  background-color: ${colors.baseBg};
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const EditButton = styled(BoardButton)`
  background-image: url(${editIcon});
`;

export const DeleteButton = styled(BoardButton)`
  background-image: url(${deleteIcon});
`;

export const ErrorMessage = styled.div`
  height: 28px;
  color: red;
  font-size: 0.8em;

  ${adaptive.maxWidth.tablet} {
    height: 24px;
  }

  ${adaptive.maxWidth.mobile} {
    height: 20px;
  }
`;
