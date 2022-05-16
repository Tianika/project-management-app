import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { deleteTask } from '../../../redux/reducers/BoardSlice';
import { deleteBoard } from '../../../redux/reducers/BoardsSlice';
import { closeModal } from '../../../redux/reducers/ModalSlice';
import { boardStateSelector } from '../../../redux/selectors/BoardSelectors';
import { confirmWindowSelector } from '../../../redux/selectors/ConfirmWindowSelector';
import { modalFunctionIdSelector } from '../../../redux/selectors/ModalSelectors';
import { FunctionIds } from '../../../utils/constants';
import { NewBoardTitle } from '../newBoard/styles';
import { ConfirmWindowButton, ConfirmWindowButtonWrapper, ConfirmWindowStyles } from './styles';

const ConfirmationWindow = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const boardID = useAppSelector(confirmWindowSelector);
  const { boardId, columnId, taskId } = useAppSelector(boardStateSelector);
  // TODO проверка на тип?
  const modalFunctionId = useAppSelector(modalFunctionIdSelector) as string;

  const removeBoard = () => {
    dispatch(deleteBoard({ id: boardID }));
  };

  const removeColumn = () => {
    // dispatch(deleteColumn({ boardId, columnId }));
  };

  const removeTask = () => {
    dispatch(deleteTask({ boardId, columnId, taskId }));
  };

  const onCloseModal = () => {
    dispatch(closeModal());
  };

  const FUNCTION_FOR_COMPLETE: Record<string, () => void> = {
    [FunctionIds.forBoard]: removeBoard,
    [FunctionIds.forColumn]: removeColumn,
    [FunctionIds.forTask]: removeTask,
  };

  return (
    <ConfirmWindowStyles>
      <NewBoardTitle>{t('confirmWindow.title')}</NewBoardTitle>
      <ConfirmWindowButtonWrapper>
        <ConfirmWindowButton onClick={FUNCTION_FOR_COMPLETE[modalFunctionId]}>
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
