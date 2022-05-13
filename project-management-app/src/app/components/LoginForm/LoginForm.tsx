import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthErrorType, LoginFormValuesType } from '../../../utils/types/types';
import { loginFormSlice } from '../../../redux/reducers/LoginFormSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { authApi } from '../../../redux/services/AuthService';
import {
  AuthForm,
  BaseButton,
  ErrorApiMessage,
  FormTextField,
  FormTextFieldError,
  FormTextFieldWrapper,
  SubmitButton,
} from './styles';
import { Loading } from '../../../styles/global';
import { authSlice } from '../../../redux/reducers/AuthSlice';
import { loginPageTranslation } from '../../../locales/LoginPageTranslation';
import { RoutersMap } from './constant';
import { LoginSelector } from '../../../redux/selectors/AuthSelectors';

export default function LoginForm() {
  const { login } = useAppSelector(LoginSelector);
  const { addFormData, setCredentials } = loginFormSlice.actions;
  const { toggleUserLogged } = authSlice.actions;
  const [signIn, { error, isLoading }] = authApi.useSignInMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let authError = error as AuthErrorType;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      loginValue: login,
      passwordValue: '',
    },
  });

  const { loginPlaceholder, passwordPlaceholder } = loginPageTranslation.ru.loginForm.placeholders;
  const { loginError, passwordError } = loginPageTranslation.ru.loginForm.errors;
  const { hideButton, showButton, submitButton, apiErrorText } = loginPageTranslation.ru.loginForm;

  const onSubmit: SubmitHandler<LoginFormValuesType> = async ({ loginValue, passwordValue }) => {
    dispatch(addFormData(loginValue));

    await signIn({
      login: loginValue,
      password: passwordValue,
    })
      .unwrap()
      .then((response) => {
        dispatch(setCredentials({ user: loginValue, token: response.token }));
        dispatch(toggleUserLogged(true));

        navigate(RoutersMap.main);
      })
      .catch((serializedError) => {
        authError = serializedError;
      });
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <FormTextFieldWrapper>
        <FormTextField
          type="text"
          {...register('loginValue', { required: true })}
          placeholder={loginPlaceholder}
          inputMode="username"
        />

        {errors.loginValue && <FormTextFieldError>{loginError}</FormTextFieldError>}
      </FormTextFieldWrapper>

      <FormTextFieldWrapper>
        <FormTextField
          type={show ? 'text' : 'password'}
          {...register('passwordValue', { required: true })}
          placeholder={passwordPlaceholder}
        />

        {errors.passwordValue && <FormTextFieldError>{passwordError}</FormTextFieldError>}
      </FormTextFieldWrapper>

      <BaseButton type="button" onClick={handleShow}>
        {show ? hideButton : showButton}
      </BaseButton>

      <SubmitButton type="submit">{submitButton}</SubmitButton>

      {isLoading && <Loading />}

      {authError && (
        <ErrorApiMessage>{`${apiErrorText} ${authError.data.message}`}</ErrorApiMessage>
      )}
    </AuthForm>
  );
}
