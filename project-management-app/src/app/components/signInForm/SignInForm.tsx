import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { AuthErrorType, LoginFormValuesType, DecodedToken } from '../../../utils/types/types';
import { authSlice } from '../../../redux/reducers/AuthSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { authApi } from '../../../redux/services/AuthService';
import {
  AuthForm,
  ErrorApiMessage,
  FormTextField,
  FormTextFieldError,
  FormTextFieldWrapper,
  IconButton,
  SubmitButton,
} from './styles';
import { LoadingDark } from '../../../styles/global';
import { authSelector, isLoadingAuthSelector } from '../../../redux/selectors/AuthSelectors';
import { LoadingState, RoutersMap } from '../../../utils/constants';
import { getUserInfo } from '../../../redux/services/EditUser.api';
import { setupInterceptorsToken } from '../../../redux/services/axios.common.api';

export default function SignInForm() {
  const { login } = useAppSelector(authSelector);
  const { setSignInData } = authSlice.actions;
  const [signIn, { error, isLoading }] = authApi.useSignInMutation();
  const isLoadingInfo = useAppSelector(isLoadingAuthSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  let authError = error as AuthErrorType;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [disabled, setDisabled] = useState(false);

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
    setDisabled(true);
    signIn({
      login: loginValue,
      password: passwordValue,
    })
      .unwrap()
      .then((response) => {
        const decodedToken = jwtDecode<JwtPayload>(response.token) as DecodedToken;

        setupInterceptorsToken(response.token);

        dispatch(
          setSignInData({ user: loginValue, token: response.token, userId: decodedToken.userId })
        );

        dispatch(getUserInfo({ userId: decodedToken.userId }))
          .unwrap()
          .then(() => {
            navigate(RoutersMap.main);
            setDisabled(false);
          })
          .catch(() => {
            setDisabled(false);
            navigate(RoutersMap.main);
          });
      })
      .catch((serializedError) => {
        setDisabled(false);
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
          inputMode="login"
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
        {t('authentication.submitLoginButton')}
      </SubmitButton>

      {isLoading && <LoadingDark />}
      {isLoadingInfo === LoadingState.Loading && <LoadingDark />}

      {authError && (
        <ErrorApiMessage>{`${t('authentication.apiErrorText')} ${
          authError?.data?.message || JSON.stringify(authError)
        }`}</ErrorApiMessage>
      )}
    </AuthForm>
  );
}
