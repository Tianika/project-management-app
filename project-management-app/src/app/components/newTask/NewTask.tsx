import { useEffect, useRef } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { batch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { createNewTask } from '../../../redux/reducers/BoardSlice';
import { closeModal } from '../../../redux/reducers/ModalSlice';
import { boardStateSelector } from '../../../redux/selectors/BoardSelectors';
import {
  NewTaskButton,
  NewTaskDescription,
  NewTaskForm,
  NewTaskInput,
  NewTaskTitle,
} from './styles';

const NewTask = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();

  const newTaskOrder = useRef(1);

  const {
    boardId,
    columnId,
    boardData: { columns },
  } = useAppSelector(boardStateSelector);

  useEffect(() => {
    if (columns) {
      const tasksList = columns.find((column) => column.id === columnId);

      if (tasksList && tasksList.tasks.length) {
        const { tasks } = tasksList;
        newTaskOrder.current = tasks[tasks.length - 1].order + 1;
      }
    }
  }, [columns]);

  const onSubmit: SubmitHandler<FieldValues> = ({ title, description }) => {
    batch(() => {
      dispatch(
        createNewTask({ title, description, boardId, columnId, newTaskOrder: newTaskOrder.current })
      );
      dispatch(closeModal());
    });
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
