import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { closeModal } from '../../../redux/reducers/ModalSlice';
import { boardStateSelector } from '../../../redux/selectors/BoardSelectors';
import { createNewColumn } from '../../../redux/services/Board.api';
import { ErrorMessage } from '../../../styles/global';
import { NewTaskButton, NewTaskForm, NewTaskInput, NewTaskTitle } from '../newTask/styles';

const NewColumn = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const { boardId } = useAppSelector(boardStateSelector);

  const onSubmit: SubmitHandler<FieldValues> = ({ title }) => {
    dispatch(createNewColumn({ title, boardId }));
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
      <ErrorMessage>{errors.title && <p>{t('viewTask.error')}</p>}</ErrorMessage>
      <NewTaskButton type="submit">{t('boardPage.createButton')}</NewTaskButton>
    </NewTaskForm>
  );
};

export default NewColumn;
