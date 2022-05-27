import { Draggable } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { saveIdsForUpdateTask } from '../../../redux/reducers/BoardSlice';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { usersSelector } from '../../../redux/selectors/BoardSelectors';
import { updateTask, viewTask } from '../../../redux/services/Board.api';
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
  index,
}: {
  task: TaskType;
  boardId: string | undefined;
  columnId: string;
  index: number;
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();

  const usersData = useAppSelector(usersSelector);

  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    usersData.forEach((user) => {
      if (user.id === userId) {
        setCurrentUser(user.name);
      }
    });
  }, [userId]);

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

    if (boardId) {
      dispatch(viewTask({ boardId, columnId, taskId: id }));
    }
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
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
          <TaskDescription>
            {t('boardPage.user')}: {currentUser || t('boardPage.deleteUser')}
          </TaskDescription>
          <TaskButtons>
            <TaskEditButton onClick={editTask} />
            <TaskDeleteButton onClick={deleteTask} />
          </TaskButtons>
        </TaskContainer>
      )}
    </Draggable>
  );
};

export default Task;
