import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { DeleteButton } from '../../../styles/global';
import acceptIcon from '../../../assets/svg/accept.svg';
import cancelIcon from '../../../assets/svg/cancel.svg';

export const ColumnContainer = styled.div`
  width: 300px;
  flex-shrink: 0;
  margin-bottom: 5px;
  background-color: ${colors.columnBg};
  border-radius: 5px;
  padding: 5px 5px 7px 7px;
  box-shadow: 0px 4px 4px ${colors.shadow};
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100% - 50px);
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
  text-align: left;
  word-wrap: break-word;
  overflow: hidden;
  overflow-wrap: break-word;
  width: 85%;
  cursor: pointer;
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

export const HeaderColumn = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const ColumnButton = `
  background-color: ${colors.columnBg};
  height: 25px;
  width: 35px;
  background-size: 16px 27px;
`;

export const ColumnDeleteButton = styled(DeleteButton)`
  ${ColumnButton}

  &:hover {
    transform: scale(1.3);
  }
`;

const TitleButton = styled.button`
  border: none;
  width: 33px;
  height: 33px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  transition: background-size 0.2s;

  &:hover {
    background-size: 25px;
  }
`;

export const AcceptEditButton = styled(TitleButton)`
  background-image: url(${acceptIcon});
  background-size: 25px;
  transition: background-size 0.2s;

  &:hover {
    background-size: 30px;
  }
`;

export const CancelEditButton = styled(TitleButton)`
  background-image: url(${cancelIcon});
`;

export const ColumnTitleForm = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 16px;
`;

export const ColumnTitleInput = styled.input`
  width: 75%;
  border: 2px solid ${colors.inputBorder};
  border-radius: 5px;
  padding-left: 5px;

  :focus {
    outline: none;
    border: 2px solid ${colors.secondaryBg};
  }
`;
