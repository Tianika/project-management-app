import styled from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';
import { NewBoardButton, NewBoardTitle } from '../newBoard/styles';

export const ConfirmWindowStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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

export const ConfirmWindowTitle = styled(NewBoardTitle);

export const ConfirmWindowButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ConfirmWindowButton = styled(NewBoardButton)`
  margin: 0.5rem;
  width: 100px;
`;
