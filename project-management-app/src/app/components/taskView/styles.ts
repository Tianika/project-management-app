import styled from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';
import { DeleteButton, EditButton } from '../../../styles/global';
import {
  AcceptEditButton,
  CancelEditButton,
  ColumnTitleForm,
  ColumnTitleInput,
} from '../column/styles';

export const TaskViewForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-width: 40vw;
  min-height: 40vh;
  background-color: ${colors.baseBg};
  border-radius: 5px;
  padding: 20px;
  font-size: 22px;

  ${adaptive.maxWidth.tablet} {
    min-width: 55vw;
    font-size: 20px;
  }

  ${adaptive.maxWidth.mobile} {
    width: 90%;
    min-width: 70vw;
    font-size: 18px;
  }
`;

export const TaskViewTitle = styled.h2`
  font-size: 1em;
  font-weight: 500;
  margin-right: 20px;
`;

export const TaskViewInput = styled.input`
  font-size: 0.8em;
  width: 80%;
  background-color: ${colors.inputBg};
  border: 2px solid ${colors.inputBorder};
  border-radius: 3px;
  padding: 0 10px;
`;

export const TaskViewDescription = styled.textarea`
  font-size: 0.8em;
  width: 80%;
  height: 20vh;
  background-color: ${colors.inputBg};
  border: 2px solid ${colors.inputBorder};
  border-radius: 3px;
  padding: 0 10px;
`;

export const TaskViewButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
`;

const EDIT_BUTTONS = `
  width: 60px;
  height: 40px;
  background-color: ${colors.baseBg};

  &:hover {
    transform: scale(1.1);
  }
`;

export const AcceptTaskEditButton = styled(AcceptEditButton)`
  ${EDIT_BUTTONS}
  background-size: 35px;

  &:hover {
    background-size: 40px;
  }
`;

export const CancelTaskEditButton = styled(CancelEditButton)`
  ${EDIT_BUTTONS}
  background-size: 25px;

  &:hover {
    background-size: 30px;
  }
`;

export const TaskViewTitleInput = styled(ColumnTitleInput)`
  font-size: 16px;
  line-height: 21px;
`;
