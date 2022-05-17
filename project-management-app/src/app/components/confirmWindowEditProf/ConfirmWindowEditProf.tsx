import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { editUserProfile } from '../../../redux/reducers/AuthorizSlice';
import { closeModal } from '../../../redux/reducers/ModalSlice';

import {
  ConfirmWindowButtonWrapper,
  ConfirmWindowButton,
  ConfirmWindowStyles,
} from '../confirmationWindow/styles';
import { NewBoardTitle } from '../newBoard/styles';

const ConfirmWindowEditProf = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { handleSubmit } = useForm();

  const onCloseModal = () => {
    dispatch(closeModal());
  };

  const onSubmit: SubmitHandler<FieldValues> = ({ id, name, login, password }) => {
    dispatch(editUserProfile({ id, name, login, password }));
  };

  return (
    <ConfirmWindowStyles onSubmit={handleSubmit(onSubmit)}>
      <NewBoardTitle>{t('editProfile.title')}</NewBoardTitle>
      <ConfirmWindowButtonWrapper>
        <ConfirmWindowButton type="submit">{t('confirmWindow.buttonY')}</ConfirmWindowButton>
        <ConfirmWindowButton onClick={onCloseModal}>
          {t('confirmWindow.buttonN')}
        </ConfirmWindowButton>
      </ConfirmWindowButtonWrapper>
    </ConfirmWindowStyles>
  );
};

export default ConfirmWindowEditProf;
