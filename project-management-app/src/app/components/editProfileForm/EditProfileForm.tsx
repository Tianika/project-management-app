import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import {
  ErrorApiMessage,
  FormTextField,
  FormTextFieldError,
  FormTextFieldWrapper,
  SubmitButton,
} from '../signInForm/styles';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import {
  authSelector,
  errorMessageAuthSelector,
  isLoadingAuthSelector,
} from '../../../redux/selectors/AuthSelectors';
import {
  FunctionIds,
  LoadingState,
  ModalIds,
  ModalTypes,
  RoutersMap,
} from '../../../utils/constants';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { DeleteButton, EditFormUser } from './styles';
import { DecodedToken, EditFormValuesType } from '../../../utils/types/types';
import { editUser, getUserInfo } from '../../../redux/services/EditUser.api';
import { LoadingDark } from '../../../styles/global';
import { authSlice } from '../../../redux/reducers/AuthSlice';
import { EditProfileLink } from '../board/styles';

const EditProfileForm = () => {
  const { t } = useTranslation();
  const { name, login, userId, token } = useAppSelector(authSelector);
  const { setUserId } = authSlice.actions;
  const isLoading = useAppSelector(isLoadingAuthSelector);
  const editError = useAppSelector(errorMessageAuthSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      if (!name) {
        const decodedToken = jwtDecode<JwtPayload>(token) as DecodedToken;
        dispatch(setUserId(decodedToken.userId));
        dispatch(getUserInfo({ userId: decodedToken.userId }));
      }
    } else {
      navigate(RoutersMap.signIn);
    }
  }, [dispatch, name, navigate, setUserId, token]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nameValue: name,
      loginValue: login,
      passwordValue: '',
    },
  });

  const openDeleteConfirmWindow = () => {
    dispatch(
      setModalChildren({
        modalId: ModalIds.confirmationWindow,
        modalType: ModalTypes.Window,
        functionId: FunctionIds.forDeleteProfile,
      })
    );
  };

  const onSubmit: SubmitHandler<EditFormValuesType> = ({
    nameValue,
    loginValue,
    passwordValue,
  }) => {
    dispatch(editUser({ userId, name: nameValue, login: loginValue, password: passwordValue }));
  };

  return (
    <>
      <EditProfileLink to={RoutersMap.main}>&laquo; {t('boardPage.buttonBack')}</EditProfileLink>
      <EditFormUser onSubmit={handleSubmit(onSubmit)}>
        <FormTextFieldWrapper>
          <FormTextField
            type="text"
            {...register('nameValue', { required: true })}
            placeholder={t('editProfile.namePlaceholder')}
          />
          {errors.nameValue && (
            <FormTextFieldError>{t('authentication.errors.nicknameError')}</FormTextFieldError>
          )}
        </FormTextFieldWrapper>
        <FormTextFieldWrapper>
          <FormTextField
            type="text"
            {...register('loginValue', { required: true })}
            placeholder={t('editProfile.loginPlaceholder')}
            inputMode="username"
          />
          {errors.loginValue && (
            <FormTextFieldError>{t('authentication.errors.loginError')}</FormTextFieldError>
          )}
        </FormTextFieldWrapper>
        <FormTextFieldWrapper>
          <FormTextField
            type="password"
            {...register('passwordValue', { required: true })}
            placeholder={t('editProfile.passwordPlaceholder')}
          />
          {errors.passwordValue && (
            <FormTextFieldError>{t('authentication.errors.passwordError')}</FormTextFieldError>
          )}
        </FormTextFieldWrapper>
        <SubmitButton type="submit">{t('editProfile.button')}</SubmitButton>
        <DeleteButton type="button" onClick={openDeleteConfirmWindow}>
          {t('editProfile.buttonDelete')}
        </DeleteButton>

        {isLoading === LoadingState.Loading && <LoadingDark />}

        {isLoading === LoadingState.Error && (
          <ErrorApiMessage>{`${t('authentication.apiErrorText')} ${editError}`}</ErrorApiMessage>
        )}
      </EditFormUser>
    </>
  );
};

export default EditProfileForm;
