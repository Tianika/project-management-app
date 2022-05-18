import styled from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';

export const NewBoardForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30vw;
  min-height: 30vh;
  background-color: ${colors.baseBg};
  border-radius: 5px;
  padding: 20px;
  font-size: 22px;

  ${adaptive.maxWidth.tablet} {
    font-size: 20px;
  }

  ${adaptive.maxWidth.mobile} {
    flex-direction: column;
    width: 90%;
    font-size: 18px;
  }
`;

export const NewBoardTitle = styled.h2`
  font-size: 1em;
  font-weight: 500;
  margin-right: 20px;
`;

export const NewBoardInput = styled.input`
  font-size: 0.8em;
  margin-right: 20px;
  width: 30vw;
  background-color: ${colors.inputBg};
  border: 2px solid ${colors.inputBorder};
  border-radius: 3px;
  padding: 0 10px;

  ${adaptive.maxWidth.mobile} {
    width: 80vw;
    margin: 10px auto;
  }
`;

export const NewBoardButton = styled.button`
  font-size: 0.8em;
  font-weight: 500;
  padding: 5px 15px;
  border: none;
  box-shadow: 0px 4px 4px ${colors.shadow};
  color: ${colors.lightFont};
  background: ${colors.submitButtonBg};
  border-radius: 3px;

  &:hover {
    background: ${colors.submitButtonHoverBg};
  }
`;
