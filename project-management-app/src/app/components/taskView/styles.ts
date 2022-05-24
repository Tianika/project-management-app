import styled from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';
import { AcceptEditButton, CancelEditButton } from '../column/styles';

export const TaskViewForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-width: 55vw;
  min-height: 40vh;
  background-color: ${colors.baseBg};
  border-radius: 5px;
  padding: 30px;
  font-size: 22px;

  ${adaptive.maxWidth.tablet} {
    min-width: 60vw;
    font-size: 20px;
    padding: 30px 20px;
  }

  ${adaptive.maxWidth.mobile} {
    min-width: 80vw;
    font-size: 16px;
    padding: 20px 10px;
  }
`;

export const TaskViewTitle = styled.h3`
  font-size: 0.95em;
  font-weight: 400;
`;

export const TaskViewLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: fit-content;
  gap: 20px;

  ${adaptive.maxWidth.tablet} {
    width: 90%;
  }

  ${adaptive.maxWidth.mobile} {
    width: 100%;
  }
`;

export const TaskViewInput = styled.input`
  font-size: 0.8em;
  width: 70%;
  background-color: ${colors.inputBg};
  border: 2px solid ${colors.inputBorder};
  border-radius: 3px;
  padding: 0 10px;

  :focus {
    outline: none;
    border: 2px solid ${colors.secondaryBg};
  }
`;

export const TaskViewDescription = styled.textarea`
  font-size: 0.8em;
  height: fit-content;
  width: 70%;
  background-color: ${colors.inputBg};
  border: 2px solid ${colors.inputBorder};
  border-radius: 3px;
  padding: 0 10px;

  :focus {
    outline: none;
    border: 2px solid ${colors.secondaryBg};
  }
`;

export const TaskViewSelect = styled.select`
  width: 70%;
  font-size: 0.8em;
  background-color: ${colors.inputBg};
  border: 2px solid ${colors.inputBorder};
  border-radius: 3px;
  padding: 0 10px;

  :focus {
    outline: none;
    border: 2px solid ${colors.secondaryBg};
  }
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
