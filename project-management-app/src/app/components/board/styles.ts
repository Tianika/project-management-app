import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';
import fox from '../../../assets/assets/jpg/fox.jpg';
import bubbles from '../../../assets/assets/jpg/bubbles.jpg';
import animal from '../../../assets/assets/jpg/animal.jpg';
import nature from '../../../assets/assets/jpg/nature.jpg';
import geometry from '../../../assets/assets/jpg/geometry.jpg';

export type BoardBackground = {
  image?: string;
};

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 8rem);
  background-image: url(${({ image }: BoardBackground) => image});
  object-fit: contain;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px;
  transition: 0.3s all;
`;

export const backgroundColor = `
  ${colors.secondaryBg};
`;

export const backgroundImgFox = `
  ${fox}
`;

export const backgroundImgAnimal = `
  ${animal}
`;

export const backgroundImgNature = `
  ${nature}
`;

export const backgroundImgBubbles = `
  ${bubbles}
`;

export const backgroundImgGeometry = `
  ${geometry}
`;

export const Select = styled.select`
  max-width: 300px;
  width: 100%;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 5px;
  color: ${colors.lightFont};
  background: url(${({ image }: BoardBackground) => image}) 85%/25% no-repeat;
  font-size: 18px;
  padding: 3px 15px;
  transition: 0.3s all;

  option {
    color: ${colors.darkFont};
    background: ${colors.lightFont};
    background-image: url(${({ image }: BoardBackground) => image}) 95%/25% no-repeat;
    display: flex;
    max-height: 4em;
    padding: 4px;
    font-size: 16px;
    max-width: 380px;
    width: 100%;
  }

  ${adaptive.maxWidth.tablet} {
    padding: 3px 10px;
  }

  ${adaptive.maxWidth.mobile} {
    max-width: 200px;
    font-size: 16px;
    margin-left: 10px;
  }
`;

export const BoardTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: ${colors.lightFont};
  height: 50px;
  margin-bottom: 10px;

  ${adaptive.maxWidth.tablet} {
    font-size: 28px;
  }

  ${adaptive.maxWidth.mobile} {
    font-size: 26px;
    margin-bottom: 0;
  }
`;

export const ColumnsContainer = styled.div`
  display: flex;
  height: calc(100% - 50px);
  gap: 15px;
  overflow-x: auto;
  overflow-y: clip;
  scrollbar-width: auto;
  scrollbar-color: ${colors.buttonActiveBg} ${colors.headerBg};

  &::-webkit-scrollbar {
    height: 1.5rem;
    width: auto;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: ${colors.headerBg};
    border-radius: 5px;
    box-shadow: inset 0 0 6px ${colors.lightShadowScroll};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.buttonActiveBg};
    border-radius: 5px;
    box-shadow: inset 0 0 6px ${colors.darkShadowScroll};
  }

  ${adaptive.maxWidth.mobile} {
    &::-webkit-scrollbar {
      height: 1.2rem;
    }
  }
`;

export const NewColumnButton = styled.button`
  min-width: 300px;
  height: 80px;
  border: none;
  border-radius: 5px;
  background-color: ${colors.baseBg};
  box-shadow: 0 4px 4px ${colors.shadow};

  ${adaptive.maxWidth.mobile} {
    min-width: 280px;
    height: 60px;
  }
`;

export const StyledLink = styled(Link)`
  min-width: fit-content;
  color: ${colors.lightFont};
  font-size: 18px;
  padding: 5px 15px;

  &:hover {
    transform: scale(1, 1.3);
    transition: 0.2s all;
  }

  &:active {
    transform: translateY(3px);
    transition: 0.2s all;
    color: ${colors.darkFont};
  }

  ${adaptive.maxWidth.tablet} {
    font-size: 16px;
    padding: 5px 10px;
  }

  ${adaptive.maxWidth.mobile} {
    font-size: 14px;
    padding: 5px;
  }
`;

export const EditProfileLink = styled(StyledLink)`
  margin-top: 1em;
  align-self: start;
`;

export const WrapperSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
