import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { AuthForm, SubmitButton } from '../../components/LoginForm/styles';

export const EditForm = styled(AuthForm)`
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
