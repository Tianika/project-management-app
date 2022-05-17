import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  FormTextFieldWrapper,
  FormTextField,
  FormTextFieldError,
  SubmitButton,
} from '../LoginForm/styles';
import { loginPageTranslation } from '../../../locales/LoginPageTranslation';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { loginSelector } from '../../../redux/selectors/AuthSelectors';
import { ModalIds, ModalTypes } from '../../../utils/constants';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { DeletButton, EditFormUser } from './styles';

const EditForm = () => {
  const { t } = useTranslation();
  const { login } = useAppSelector(loginSelector);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
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

  const removeUser = () => {
    // dispatch(deleteUser({ id: decoded.userId }));
  };

  const { loginError, passwordError } = loginPageTranslation.ru.loginForm.errors;

  return (
    <EditFormUser onSubmit={handleSubmit(() => '1')}>
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
      <DeletButton onClick={removeUser}>{t('editProfile.buttonDelete')}</DeletButton>
    </EditFormUser>
  );
};

export default EditForm;
