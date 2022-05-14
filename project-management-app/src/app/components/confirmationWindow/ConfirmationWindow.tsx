import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { deleteBoard } from '../../../redux/reducers/BoardsSlice';
import { closeModal } from '../../../redux/reducers/ModalSlice';
import { confirmWindowSelector } from '../../../redux/selectors/ConfirmWindowSelector';
import { NewBoardTitle } from '../newBoard/styles';
import { ConfirmWindowButton, ConfirmWindowButtonWrapper, ConfirmWindowStyles } from './styles';

const ConfirmationWindow = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const boardID = useAppSelector(confirmWindowSelector);

  const removeBoard = () => {
    dispatch(deleteBoard({ id: boardID }));
  };

  const onCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <ConfirmWindowStyles>
      <NewBoardTitle>{t('confirmWindow.title')}</NewBoardTitle>
      <ConfirmWindowButtonWrapper>
        <ConfirmWindowButton onClick={removeBoard}>
          {t('confirmWindow.buttonY')}
        </ConfirmWindowButton>
        <ConfirmWindowButton onClick={onCloseModal}>
          {t('confirmWindow.buttonN')}
        </ConfirmWindowButton>
      </ConfirmWindowButtonWrapper>
    </ConfirmWindowStyles>
  );
};

export default ConfirmationWindow;
