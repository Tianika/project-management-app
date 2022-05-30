import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { AuthForm, SubmitButton } from '../signInForm/styles';

export const EditFormUser = styled(AuthForm)`
  margin-top: 2rem;
`;

export const DeleteButton = styled(SubmitButton)`
  background-color: ${colors.errorBg};
  &:hover:not(:disabled) {
    background: ${colors.deleteButtonHoverBg};
  }
  &:active:not(:disabled) {
    background: ${colors.deleteButtonActiveBg};
  }
`;
