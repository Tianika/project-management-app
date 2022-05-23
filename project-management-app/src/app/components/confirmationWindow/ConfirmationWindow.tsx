import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { closeModal } from '../../../redux/reducers/ModalSlice';
import { boardStateSelector } from '../../../redux/selectors/BoardSelectors';
import { confirmWindowSelector } from '../../../redux/selectors/ConfirmWindowSelector';
import { modalFunctionIdSelector } from '../../../redux/selectors/ModalSelectors';
import { deleteColumn, deleteTask } from '../../../redux/services/Board.api';
import { deleteBoard } from '../../../redux/services/Boards.api';
import { FunctionIds, RoutersMap } from '../../../utils/constants';
import { NewBoardTitle } from '../newBoard/styles';
import {
  CancelWindowButton,
  ConfirmWindowButton,
  ConfirmWindowButtonWrapper,
  ConfirmWindowStyles,
} from './styles';
import { deleteUser } from '../../../redux/services/EditUser.api';
import { authSelector } from '../../../redux/selectors/AuthSelectors';
import { authSlice } from '../../../redux/reducers/AuthSlice';
import { deleteUserInfoFromLocalStorage } from '../../../services/deleteUserInfoFromLocalStorage';

const ConfirmationWindow = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const boardID = useAppSelector(confirmWindowSelector);
  const { boardId, columnId, taskId } = useAppSelector(boardStateSelector);
  const { userId } = useAppSelector(authSelector);
  const { clearUserInfo } = authSlice.actions;
  const navigate = useNavigate();
  // TODO проверка на тип?
  const modalFunctionId = useAppSelector(modalFunctionIdSelector) as string;

  const removeBoard = () => {
    dispatch(deleteBoard({ id: boardID }));
  };

  const removeColumn = () => {
    dispatch(deleteColumn({ boardId, columnId }));
  };

  const removeTask = () => {
    dispatch(deleteTask({ boardId, columnId, taskId }));
  };

  const deleteProfile = () => {
    dispatch(deleteUser({ userId }));
    dispatch(clearUserInfo());
    deleteUserInfoFromLocalStorage();
    dispatch(closeModal());

    navigate(RoutersMap.welcome);
  };

  const onCloseModal = () => {
    dispatch(closeModal());
  };

  const FUNCTION_FOR_COMPLETE: Record<string, () => void> = {
    [FunctionIds.forBoard]: removeBoard,
    [FunctionIds.forColumn]: removeColumn,
    [FunctionIds.forTask]: removeTask,
    [FunctionIds.forDeleteProfile]: deleteProfile,
  };

  return (
    <ConfirmWindowStyles>
      <NewBoardTitle>{t('confirmWindow.title')}</NewBoardTitle>
      <ConfirmWindowButtonWrapper>
        <ConfirmWindowButton onClick={FUNCTION_FOR_COMPLETE[modalFunctionId]}>
          {t('confirmWindow.buttonY')}
        </ConfirmWindowButton>
        <CancelWindowButton onClick={onCloseModal}>{t('confirmWindow.buttonN')}</CancelWindowButton>
      </ConfirmWindowButtonWrapper>
    </ConfirmWindowStyles>
  );
};

export default ConfirmationWindow;
