import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 11rem);
  padding: 20px;
`;

export const BoardTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: ${colors.lightFont};
  height: 50px;
  margin-bottom: 10px;
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
    height: auto;
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
`;

export const NewColumnButton = styled.button`
  min-width: 300px;
  height: 80px;
  border: none;
  border-radius: 5px;
  background-color: ${colors.baseBg};
  box-shadow: 0 4px 4px ${colors.shadow};
`;

export const StyledLink = styled(Link)`
  width: fit-content;
  color: ${colors.lightFont};
  font-size: 18px;
  padding: 10px 20px;

  &:hover {
    transform: scale(1, 1.3);
    transition: 0.2s all;
  }

  &:active {
    transform: translateY(3px);
    transition: 0.2s all;
    color: ${colors.darkFont};
  }
`;

export const EditProfileLink = styled(StyledLink)`
  margin-top: 1em;
  align-self: start;
`;
