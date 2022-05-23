import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { closeModal } from '../../../redux/reducers/ModalSlice';
import { boardStateSelector } from '../../../redux/selectors/BoardSelectors';
import { createNewTask } from '../../../redux/services/Board.api';
import {
  NewTaskButton,
  NewTaskDescription,
  NewTaskForm,
  NewTaskInput,
  NewTaskTitle,
} from './styles';
import { authSelector } from '../../../redux/selectors/AuthSelectors';

const NewTask = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const { userId } = useAppSelector(authSelector);

  const { boardId, columnId } = useAppSelector(boardStateSelector);

  const onSubmit: SubmitHandler<FieldValues> = ({ title, description }) => {
    dispatch(createNewTask({ title, description, boardId, columnId, userId }));
    dispatch(closeModal());
  };

  return (
    <NewTaskForm onSubmit={handleSubmit(onSubmit)}>
      <NewTaskTitle>{t('boardPage.addTaskBtn')}</NewTaskTitle>
      <NewTaskInput
        type="text"
        {...register('title', { required: true })}
        placeholder={t('boardPage.taskTitlePlaceholder')}
        autoFocus
      />
      <NewTaskDescription
        type="text"
        {...register('description', { required: true })}
        placeholder={t('boardPage.taskDescriptionPlaceholder')}
      />
      <NewTaskButton type="submit">{t('boardPage.createButton')}</NewTaskButton>
    </NewTaskForm>
  );
};

export default NewTask;
