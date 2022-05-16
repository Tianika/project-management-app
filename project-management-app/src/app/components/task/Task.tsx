import { useState } from 'react';
import { batch } from 'react-redux';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { saveIdsForUpdateTask } from '../../../redux/reducers/BoardSlice';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { FunctionIds, ModalIds, ModalTypes } from '../../../utils/constants';
import { TaskType } from '../../../utils/types';
import {
  DeleteButton,
  EditButton,
  TaskButtons,
  TaskContainer,
  TaskDescription,
  TaskTitle,
} from './styles';

const Task = ({
  task: { id, title, order, description, userId, files },
  boardId,
  columnId,
}: {
  task: TaskType;
  boardId: string | undefined;
  columnId: string;
}) => {
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const deleteTask = () => {
    batch(() => {
      dispatch(saveIdsForUpdateTask({ boardId, columnId, taskId: id }));
      dispatch(
        setModalChildren({
          modalId: ModalIds.confirmationWindow,
          modalType: ModalTypes.Window,
          functionId: FunctionIds.forTask,
        })
      );
    });
  };

  return (
    <TaskContainer>
      <TaskTitle>{title}</TaskTitle>
      <TaskDescription>{description}</TaskDescription>
      <TaskButtons>
        <EditButton />
        <DeleteButton onClick={deleteTask} />
      </TaskButtons>
    </TaskContainer>
  );
};

export default Task;
