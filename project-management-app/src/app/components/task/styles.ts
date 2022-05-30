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

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.baseBg};
  padding: 10px;
  margin-right: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px ${colors.secondaryBg};
`;

export const TaskTitle = styled.h4`
  width: 100%;
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  padding: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  word-wrap: break-word;
  hyphens: auto;

  ${adaptive.maxWidth.tablet} {
    font-size: 16px;
  }
`;

export const TaskDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  word-wrap: break-word;
  hyphens: auto;
  margin-bottom: 5px;

  ${adaptive.maxWidth.tablet} {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const TaskButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TaskButton = `
  height: 30px;
  width: 40px;
  background-size: 20px 30px;
`;

export const TaskEditButton = styled(EditButton)`
  ${TaskButton}
`;

export const TaskDeleteButton = styled(DeleteButton)`
  ${TaskButton}
`;

export const TaskTitleForm = styled(ColumnTitleForm)`
  align-items: center;
  padding: 5px 0;
`;

const EDIT_BUTTONS = `
  width: 25px;
  height: 25px;
  background-color: ${colors.baseBg};
  background-size: 15px;

  &:hover {
    transform: scale(1.1);
    background-size: 20px;
  }
`;

export const AcceptTaskEditButton = styled(AcceptEditButton)`
  ${EDIT_BUTTONS}
`;

export const CancelTaskEditButton = styled(CancelEditButton)`
  ${EDIT_BUTTONS}
`;

export const TaskTitleInput = styled(ColumnTitleInput)`
  font-size: 16px;
  line-height: 21px;
`;
