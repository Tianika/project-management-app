import styled from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';

export const NewTaskForm = styled.form`
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

export const NewTaskTitle = styled.h2`
  font-size: 1em;
  font-weight: 500;
  margin-right: 20px;
`;

export const NewTaskInput = styled.input`
  font-size: 0.8em;
  width: 80%;
  background-color: ${colors.inputBg};
  border: 2px solid ${colors.inputBorder};
  border-radius: 3px;
  padding: 0 10px;
`;

export const NewTaskDescription = styled.textarea`
  font-size: 0.8em;
  width: 80%;
  height: 20vh;
  background-color: ${colors.inputBg};
  border: 2px solid ${colors.inputBorder};
  border-radius: 3px;
  padding: 0 10px;
`;

export const NewTaskButton = styled.button`
  min-width: 120px;
  font-size: 0.8em;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  box-shadow: 0px 4px 4px ${colors.shadow};
  color: ${colors.lightFont};
  background: ${colors.submitButtonBg};
  border-radius: 3px;

  &:hover {
    background: ${colors.submitButtonHoverBg};
  }
`;
