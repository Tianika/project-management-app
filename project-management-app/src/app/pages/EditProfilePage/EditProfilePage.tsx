import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { loginPageTranslation } from '../../../locales/LoginPageTranslation';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { loginSelector } from '../../../redux/selectors/AuthSelectors';
import { ColumnCenteredWrapper } from '../../../styles/global';
import Header from '../../components/header/Header';
import { ModalIds, ModalTypes } from '../../../utils/constants';
import {
  FormTextFieldWrapper,
  FormTextField,
  FormTextFieldError,
  SubmitButton,
} from '../../components/LoginForm/styles';
import { MainPageContainer } from '../MainPage/styles';
import { DeletButton, EditForm } from './styles';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';

const EditProfilePage = () => {
  const { t } = useTranslation();
  const { login } = useAppSelector(loginSelector);
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nameValue: '',
      loginValue: login,
      passwordValue: '',
    },
  });

  const openConfirmWindow = () => {
    dispatch(
      setModalChildren({ modalId: ModalIds.confirmWindowEditProf, modalType: ModalTypes.Window })
    );
  };

  const { loginError, passwordError } = loginPageTranslation.ru.loginForm.errors;

  return (
    <MainPageContainer>
      <Header />
      <ColumnCenteredWrapper>
        <EditForm>
          <FormTextFieldWrapper>
            <FormTextField
              type="text"
              {...register('nameValue', { required: true })}
              placeholder={t('editProfile.namePlaceholder')}
            />
            {errors.loginValue && <FormTextFieldError>{loginError}</FormTextFieldError>}
          </FormTextFieldWrapper>
          <FormTextFieldWrapper>
            <FormTextField
              type="text"
              {...register('loginValue', { required: true })}
              placeholder={t('editProfile.loginPlaceholder')}
            />
            {errors.loginValue && <FormTextFieldError>{loginError}</FormTextFieldError>}
          </FormTextFieldWrapper>
          <FormTextFieldWrapper>
            <FormTextField
              type="password"
              {...register('passwordValue', { required: true })}
              placeholder={t('editProfile.passwordPlaceholder')}
            />
            {errors.passwordValue && <FormTextFieldError>{passwordError}</FormTextFieldError>}
          </FormTextFieldWrapper>
          <SubmitButton onClick={openConfirmWindow}>{t('editProfile.button')}</SubmitButton>
          <DeletButton>{t('editProfile.buttonDelete')}</DeletButton>
        </EditForm>
      </ColumnCenteredWrapper>
    </MainPageContainer>
  );
};

export default EditProfilePage;
