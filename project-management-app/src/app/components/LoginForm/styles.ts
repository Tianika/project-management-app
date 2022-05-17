import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const FormTextFieldWrapper = styled.label`
  position: relative;

  width: 100%;
`;

export const FormTextFieldError = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;

  color: ${colors.errorBg};
  font-size: 0.8em;
`;

export const FormTextField = styled.input`
  height: 2.75em;
  max-width: 20em;
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;

  font-size: 1em;
  word-wrap: break-word;

  background-color: ${colors.inputBg};
  border: 2px solid ${colors.inputBorder};
  border-radius: 3px;

  transition: background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;

  &:hover {
    background-color: ${colors.baseBg};
    border: 2px solid ${colors.inputHoverBorder};
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5em 2.3em;
  gap: 1.5em;
  max-width: 25em;
  width: 100%;

  background-color: ${colors.baseBg};
  border-radius: 3px;
  box-shadow: 0 0 20px ${colors.secondaryBg};
`;

export const BaseButton = styled.button`
  display: inline-block;
  padding: 0.6em 1.3em;

  color: ${colors.baseButtonColor};
  font-weight: bold;
  text-decoration: none;

  background: ${colors.baseButtonBg};
  border: 0;
  border-radius: 0.3em;

  &:hover {
    background: ${colors.baseButtonHoverBg};
  }

  &:active {
    background: ${colors.baseButtonActiveBg};
  }
`;

export const SubmitButton = styled(BaseButton)`
  color: ${colors.baseBg};

  background: ${colors.submitButtonBg};

  &:hover {
    background: ${colors.submitButtonHoverBg};
  }

  &:active {
    background: ${colors.submitButtonActiveBg};
  }
`;

export const ApiMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em 1em;
  gap: 0.5em;

  color: ${colors.baseBg};
  word-wrap: anywhere;

  background: ${colors.submitButtonBg};
  border-radius: 4px;
  border: 1px solid ${colors.submitButtonBg};
`;

export const ErrorApiMessage = styled(ApiMessage)`
  background: ${colors.errorBg};
  border: 1px solid ${colors.errorBg};
`;
