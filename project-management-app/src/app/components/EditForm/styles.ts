import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { AuthForm, SubmitButton } from '../LoginForm/styles';

export const EditFormUser = styled(AuthForm)`
  margin-top: 2rem;
`;

export const DeletButton = styled(SubmitButton)`
  background-color: ${colors.errorBg};
  &:hover {
    background: ${colors.deleteButtonHoverBg};
  }
  &:active {
    background: ${colors.deleteButtonActiveBg};
  }
`;
