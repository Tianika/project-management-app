import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthErrorType, RegisterFormValuesType } from '../../../utils/types/types';
import { authSlice } from '../../../redux/reducers/AuthSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import {
  AuthForm,
  ApiMessage,
  ErrorApiMessage,
  FormTextField,
  FormTextFieldError,
  FormTextFieldWrapper,
  SubmitButton,
  IconButton,
} from '../signInForm/styles';
import { Loading, LoadingDark } from '../../../styles/global';
import { authSelector } from '../../../redux/selectors/AuthSelectors';
import { RoutersMap } from '../../../utils/constants';
import { registerApi } from '../../../redux/services/RegisterService';
import { WAITING_TIME_IN_MS } from './constant';

export default function SignUpForm() {
  const { login } = useAppSelector(authSelector);
  const { setSignUpData } = authSlice.actions;
  const [signUp, { error, isLoading }] = registerApi.useSignUpMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  let registerError = error as AuthErrorType;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [disabled, setDisabled] = useState(false);

  const [isSuccessfullyRegister, setIsSuccessfullyRegister] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nameValue: '',
      loginValue: '',
      passwordValue: '',
    },
  });

  const onSubmit: SubmitHandler<RegisterFormValuesType> = ({
    nameValue,
    loginValue,
    passwordValue,
  }) => {
    setDisabled(true);

    signUp({
      name: nameValue,
      login: loginValue,
      password: passwordValue,
    })
      .unwrap()
      .then((response) => {
        dispatch(
          setSignUpData({ name: response.name, login: response.login, userId: response.id })
        );

        setIsSuccessfullyRegister(true);

        setTimeout(() => {
          setDisabled(false);
          navigate(RoutersMap.signIn);
          setIsSuccessfullyRegister(false);
        }, WAITING_TIME_IN_MS);
      })
      .catch((serializedError) => {
        setDisabled(false);
        registerError = serializedError;
      });
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <FormTextFieldWrapper>
        <FormTextField
          type="text"
          {...register('nameValue', { required: true })}
          placeholder={t('authentication.placeholders.nicknamePlaceholder')}
          inputMode="nickname"
        />

        {errors.loginValue && (
          <FormTextFieldError>{t('authentication.errors.nicknameError')}</FormTextFieldError>
        )}
      </FormTextFieldWrapper>

      <FormTextFieldWrapper>
        <FormTextField
          type="text"
          {...register('loginValue', { required: true })}
          placeholder={t('authentication.placeholders.loginPlaceholder')}
          inputMode="username"
        />

        {errors.loginValue && (
          <FormTextFieldError>{t('authentication.errors.loginError')}</FormTextFieldError>
        )}
      </FormTextFieldWrapper>

      <FormTextFieldWrapper>
        <FormTextField
          autocomplete="on"
          type={show ? 'text' : 'password'}
          {...register('passwordValue', { required: true })}
          placeholder={t('authentication.placeholders.passwordPlaceholder')}
        />

        <IconButton type="button" onClick={handleShow}>
          {show ? (
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="VisibilityOffIcon"
            >
              <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
            </svg>
          ) : (
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="VisibilityOnIcon"
            >
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
            </svg>
          )}
        </IconButton>

        {errors.passwordValue && (
          <FormTextFieldError>{t('authentication.errors.passwordError')}</FormTextFieldError>
        )}
      </FormTextFieldWrapper>

      <SubmitButton disabled={disabled} type="submit">
        {t('authentication.submitRegisterButton')}
      </SubmitButton>

      {isLoading && <LoadingDark />}

      {isSuccessfullyRegister && (
        <ApiMessage>
          {t('authentication.successRegisterMessageFirstPart')} {login}
          {t('authentication.successRegisterMessageSecondPart')}
          <Loading />
        </ApiMessage>
      )}

      {registerError && (
        <ErrorApiMessage>{`${t('authentication.apiErrorText')} ${
          registerError?.data?.message || JSON.stringify(registerError)
        }`}</ErrorApiMessage>
      )}
    </AuthForm>
  );
}
