import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { boardIdSelector } from '../../../redux/selectors/BoardSelectors';
import { boardsSelector } from '../../../redux/selectors/BoardsSelector';
import { updateBoard } from '../../../redux/services/Boards.api';
import { ErrorMessage } from '../../../styles/global';
import { NewBoardButton, NewBoardForm, NewBoardInput, NewBoardTitle } from '../newBoard/styles';

const EditBoard = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const boardId = useAppSelector(boardIdSelector);
  const boards = useAppSelector(boardsSelector);

  const boardData = boards.find((board) => board.id === boardId);

  const onSubmit: SubmitHandler<FieldValues> = ({ title, description }) => {
    dispatch(updateBoard({ boardId, title, description }));
  };

  return (
    <NewBoardForm onSubmit={handleSubmit(onSubmit)}>
      <NewBoardTitle>{t('editBoard.title')}</NewBoardTitle>
      <NewBoardInput
        type="text"
        {...register('title', { required: true })}
        placeholder={t('newBoard.titlePlaceholder')}
        defaultValue={boardData?.title || ''}
        autoFocus
      />
      <NewBoardInput
        type="text"
        {...register('description', { required: true })}
        placeholder={t('newBoard.descriptionPlaceholder')}
        defaultValue={boardData?.description || ''}
      />
      <ErrorMessage>
        {(errors.title || errors.description) && <p>{t('viewTask.error')}</p>}
      </ErrorMessage>
      <NewBoardButton type="submit">{t('editBoard.button')}</NewBoardButton>
    </NewBoardForm>
  );
};

export default EditBoard;
