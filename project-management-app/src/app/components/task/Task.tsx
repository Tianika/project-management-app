import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { saveIdsForUpdateTask } from '../../../redux/reducers/BoardSlice';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { updateTask } from '../../../redux/services/Board.api';
import { FunctionIds, ModalIds, ModalTypes } from '../../../utils/constants';
import { TaskType } from '../../../utils/types';
import {
  AcceptTaskEditButton,
  CancelTaskEditButton,
  TaskButtons,
  TaskContainer,
  TaskDeleteButton,
  TaskDescription,
  TaskEditButton,
  TaskTitle,
  TaskTitleForm,
  TaskTitleInput,
} from './styles';

const Task = ({
  task: { id, title, order, description, userId },
  boardId,
  columnId,
}: {
  task: TaskType;
  boardId: string | undefined;
  columnId: string;
  index: number;
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();

  const [isEdit, setIsEdit] = useState(false);

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const deleteTask = () => {
    dispatch(saveIdsForUpdateTask({ boardId, columnId, taskId: id }));
    dispatch(
      setModalChildren({
        modalId: ModalIds.confirmationWindow,
        modalType: ModalTypes.Window,
        functionId: FunctionIds.forTask,
      })
    );
  };

  const onSubmit: SubmitHandler<FieldValues> = ({ taskTitle }) => {
    if (boardId) {
      dispatch(
        updateTask({ title: taskTitle, order, description, boardId, columnId, userId, taskId: id })
      );
      toggleIsEdit();
    }
  };

  const editTask = () => {
    dispatch(saveIdsForUpdateTask({ boardId, columnId, taskId: id }));
    dispatch(
      setModalChildren({
        modalId: ModalIds.taskView,
        modalType: ModalTypes.Window,
      })
    );
  };

  return (
    <TaskContainer>
      {!isEdit && (
        <TaskTitle onClick={toggleIsEdit} title={t('boardPage.hintEditTitle')}>
          {title}
        </TaskTitle>
      )}
      {isEdit && (
        <TaskTitleForm onSubmit={handleSubmit(onSubmit)}>
          <AcceptTaskEditButton type="submit" />
          <TaskTitleInput
            type="text"
            {...register('taskTitle', { required: true })}
            defaultValue={title}
            autoFocus
          />
          <CancelTaskEditButton onClick={toggleIsEdit} />
        </TaskTitleForm>
      )}

      <TaskDescription>{description}</TaskDescription>
      <TaskButtons>
        <TaskEditButton onClick={editTask} />
        <TaskDeleteButton onClick={deleteTask} />
      </TaskButtons>
    </TaskContainer>
  );
};

export default Task;
