import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthErrorType, RegisterFormValuesType } from '../../../utils/types/types';
import { loginFormSlice } from '../../../redux/reducers/LoginFormSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import {
  AuthForm,
  BaseButton,
  ApiMessage,
  ErrorApiMessage,
  FormTextField,
  FormTextFieldError,
  FormTextFieldWrapper,
  SubmitButton,
} from '../LoginForm/styles';
import { Loading } from '../../../styles/global';
import { loginSelector } from '../../../redux/selectors/AuthSelectors';
import { RoutersMap } from '../../../utils/constants';
import { registerApi } from '../../../redux/services/RegisterService';
import { WAITING_TIME_IN_MS } from './constant';

export default function RegisterForm() {
  const { login } = useAppSelector(loginSelector);
  const { addFormData } = loginFormSlice.actions;
  const [signUp, { error, isLoading }] = registerApi.useSignUpMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  let registerError = error as AuthErrorType;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

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
    signUp({
      name: nameValue,
      login: loginValue,
      password: passwordValue,
    })
      .unwrap()
      .then((response) => {
        dispatch(addFormData(response.login));

        setIsSuccessfullyRegister(true);

        setTimeout(() => {
          navigate(RoutersMap.login);
          setIsSuccessfullyRegister(false);
        }, WAITING_TIME_IN_MS);
      })
      .catch((serializedError) => {
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
          type={show ? 'text' : 'password'}
          {...register('passwordValue', { required: true })}
          placeholder={t('authentication.placeholders.passwordPlaceholder')}
        />

        {errors.passwordValue && (
          <FormTextFieldError>{t('authentication.errors.passwordError')}</FormTextFieldError>
        )}
      </FormTextFieldWrapper>

      <BaseButton type="button" onClick={handleShow}>
        {show ? t('authentication.hideButton') : t('authentication.showButton')}
      </BaseButton>

      <SubmitButton type="submit">{t('authentication.submitRegisterButton')}</SubmitButton>

      {isLoading && <Loading />}

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
