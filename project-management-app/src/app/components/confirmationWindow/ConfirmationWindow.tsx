import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { deleteBoard } from '../../../redux/reducers/BoardsSlice';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { ConfirmWindowSelector } from '../../../redux/selectors/ConfirmWindowSelector';
import { ModalIds, ModalTypes } from '../../../utils/constants';
import { NewBoardTitle } from '../newBoard/styles';
import { ConfirmWindowButton, ConfirmWindowButtonWrapper, ConfirmWindowStyles } from './styles';

const ConfirmationWindow = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const boardID = useAppSelector(ConfirmWindowSelector);

  const removeBoard = () => {
    dispatch(deleteBoard({ id: boardID }));
  };

  const closeModal = () => {
    dispatch(setModalChildren({ modalId: ModalIds.empty, modalType: ModalTypes.Overlay }));
  };

  return (
    <ConfirmWindowStyles>
      <NewBoardTitle>{t('confirmWindow.title')}</NewBoardTitle>
      <ConfirmWindowButtonWrapper>
        <ConfirmWindowButton onClick={removeBoard}>
          {t('confirmWindow.buttonY')}
        </ConfirmWindowButton>
        <ConfirmWindowButton onClick={closeModal}>{t('confirmWindow.buttonN')}</ConfirmWindowButton>
      </ConfirmWindowButtonWrapper>
    </ConfirmWindowStyles>
  );
};

export default ConfirmationWindow;
