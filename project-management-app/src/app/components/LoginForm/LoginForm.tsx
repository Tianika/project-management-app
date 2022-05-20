import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { AuthErrorType, LoginFormValuesType, DecodedToken } from '../../../utils/types/types';
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
import { loginSelector } from '../../../redux/selectors/AuthSelectors';
import { RoutersMap } from '../../../utils/constants';

export default function LoginForm() {
  const { login } = useAppSelector(loginSelector);
  const { addFormData, setCredentials, setUserId } = loginFormSlice.actions;
  const [signIn, { error, isLoading }] = authApi.useSignInMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

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

  const onSubmit: SubmitHandler<LoginFormValuesType> = ({ loginValue, passwordValue }) => {
    dispatch(addFormData(loginValue));

    signIn({
      login: loginValue,
      password: passwordValue,
    })
      .unwrap()
      .then((response) => {
        const decoded = jwtDecode<JwtPayload>(response.token) as DecodedToken;

        dispatch(setCredentials({ user: loginValue, token: response.token }));
        dispatch(setUserId(decoded.userId));

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

      <SubmitButton type="submit">{t('authentication.submitLoginButton')}</SubmitButton>

      {isLoading && <Loading />}

      {authError && (
        <ErrorApiMessage>{`${t('authentication.apiErrorText')} ${
          authError?.data?.message || JSON.stringify(authError)
        }`}</ErrorApiMessage>
      )}
    </AuthForm>
  );
}
