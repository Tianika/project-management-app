import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { closeModal } from '../../../redux/reducers/ModalSlice';
import {
  taskDataSelector,
  taskIdSelector,
  usersSelector,
} from '../../../redux/selectors/BoardSelectors';
import { updateTask } from '../../../redux/services/Board.api';
import {
  AcceptTaskEditButton,
  CancelTaskEditButton,
  ErrorMessage,
  TaskViewButtons,
  TaskViewDescription,
  TaskViewForm,
  TaskViewInput,
  TaskViewLabel,
  TaskViewSelect,
  TaskViewTitle,
} from './styles';

const TaskView = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const taskId = useAppSelector(taskIdSelector);
  const { title, description, order, boardId, columnId, userId } = useAppSelector(taskDataSelector);
  const users = useAppSelector(usersSelector);

  const cancelEdit = () => {
    dispatch(closeModal());
  };

  const onSubmit: SubmitHandler<FieldValues> = ({ taskTitle, taskDescription, user }) => {
    dispatch(
      updateTask({
        title: taskTitle,
        order,
        description: taskDescription,
        boardId,
        columnId,
        taskId,
        userId: user,
      })
    );
    dispatch(closeModal());
  };

  return (
    <TaskViewForm onSubmit={handleSubmit(onSubmit)}>
      <TaskViewLabel>
        <TaskViewTitle>{t('viewTask.title')}</TaskViewTitle>
        <TaskViewInput
          {...register('taskTitle', {
            required: true,
          })}
          defaultValue={title}
        />
      </TaskViewLabel>

      <TaskViewLabel>
        <TaskViewTitle>{t('viewTask.description')}</TaskViewTitle>
        <TaskViewDescription
          {...register('taskDescription', {
            required: true,
          })}
          defaultValue={description}
        />
      </TaskViewLabel>

      <TaskViewLabel>
        <TaskViewTitle>{t('viewTask.user')}</TaskViewTitle>
        <TaskViewSelect
          {...register('user', {
            required: true,
          })}
          defaultValue={userId}
        >
          {users.map(({ id, name }) => {
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </TaskViewSelect>
      </TaskViewLabel>

      <ErrorMessage>
        {(errors.taskDescription || errors.taskTitle) && <p>{t('viewTask.error')}</p>}
      </ErrorMessage>

      <TaskViewButtons>
        <AcceptTaskEditButton />
        <CancelTaskEditButton onClick={cancelEdit} />
      </TaskViewButtons>
    </TaskViewForm>
  );
};

export default TaskView;
