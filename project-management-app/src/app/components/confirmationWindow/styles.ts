import styled from 'styled-components';
import { NewBoardButton, NewBoardStyles, NewBoardTitle } from '../newBoard/styles';

export const ConfirmWindowStyles = styled(NewBoardStyles)`
  flex-direction: column;
`;

export const ConfirmWindowTitle = styled(NewBoardTitle);

export const ConfirmWindowButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ConfirmWindowButton = styled(NewBoardButton)`
  margin: 0.5rem;
`;
