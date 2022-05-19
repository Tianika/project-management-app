import { useEffect, useRef } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { closeModal } from '../../../redux/reducers/ModalSlice';
import { boardStateSelector } from '../../../redux/selectors/BoardSelectors';
import { createNewColumn } from '../../../redux/services/Board.api';
import { NewTaskButton, NewTaskForm, NewTaskInput, NewTaskTitle } from '../newTask/styles';

const NewColumn = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();

  const newColumnOrder = useRef(1);

  const {
    boardId,
    boardData: { columns },
  } = useAppSelector(boardStateSelector);

  useEffect(() => {
    if (columns.length) {
      newColumnOrder.current = columns[columns.length - 1].order + 1;
    }
  }, [columns]);

  const onSubmit: SubmitHandler<FieldValues> = ({ title }) => {
    dispatch(createNewColumn({ title, boardId, newColumnOrder: newColumnOrder.current }));
    dispatch(closeModal());
  };

  return (
    <NewTaskForm onSubmit={handleSubmit(onSubmit)}>
      <NewTaskTitle>{t('boardPage.createColumnTitle')}</NewTaskTitle>
      <NewTaskInput
        type="text"
        {...register('title', { required: true })}
        placeholder={t('boardPage.taskTitlePlaceholder')}
        autoFocus
      />
      <NewTaskButton type="submit">{t('boardPage.createButton')}</NewTaskButton>
    </NewTaskForm>
  );
};

export default NewColumn;
