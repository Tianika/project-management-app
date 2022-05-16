import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
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

  const onCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <ConfirmWindowStyles>
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
