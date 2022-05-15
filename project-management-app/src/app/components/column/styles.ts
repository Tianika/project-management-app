import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ColumnContainer = styled.div`
  min-width: 300px;
  margin-bottom: 5px;
  background-color: ${colors.columnBg};
  border-radius: 5px;
  padding: 5px 5px 7px 7px;
  box-shadow: 0px 4px 4px ${colors.shadow};
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100% - 40px);
  overflow: auto;
  scrollbar-color: ${colors.secondaryBg} ${colors.buttonActiveBg};
  margin-bottom: 5px;
  background-color: ${colors.columnBg};

  &::-webkit-scrollbar {
    height: auto;
    width: auto;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${colors.secondaryBg};
    border-radius: 5px;
    box-shadow: inset 0 0 6px ${colors.lightShadowScroll};
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.buttonActiveBg};
    border-radius: 5px;
    box-shadow: inset 0 0 6px ${colors.darkShadowScroll};
  }
`;

export const ColumnTitle = styled.h2`
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
`;

export const NewTaskButton = styled.button`
  color: ${colors.lightFont};
  background-color: ${colors.secondaryBg};
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  box-shadow: 0px 4px 4px ${colors.shadow};
`;
