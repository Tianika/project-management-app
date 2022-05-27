import { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { saveIdsForNewTask } from '../../../redux/reducers/BoardSlice';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { updateColumn } from '../../../redux/services/Board.api';
import { FunctionIds, ModalIds, ModalTypes } from '../../../utils/constants';
import { ColumnType } from '../../../utils/types';
import Task from '../task/Task';
import {
  ColumnContainer,
  ColumnDeleteButton,
  ColumnTitle,
  ColumnTitleForm,
  ColumnTitleInput,
  AcceptEditButton,
  HeaderColumn,
  NewTaskButton,
  CancelEditButton,
  TasksContainer,
} from './styles';

const Column = ({
  column: { id, title, order, tasks },
  boardId,
  index,
}: {
  column: ColumnType;
  boardId: string | undefined;
  index: number;
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();

  const [isEdit, setIsEdit] = useState(false);

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const onClick = () => {
    dispatch(saveIdsForNewTask({ boardId, columnId: id }));
    dispatch(setModalChildren({ modalId: ModalIds.newTask, modalType: ModalTypes.Window }));
  };

  const deleteColumn = () => {
    dispatch(saveIdsForNewTask({ boardId, columnId: id }));
    dispatch(
      setModalChildren({
        modalId: ModalIds.confirmationWindow,
        modalType: ModalTypes.Window,
        functionId: FunctionIds.forColumn,
      })
    );
  };

  const onSubmit: SubmitHandler<FieldValues> = ({ columnTitle }) => {
    if (boardId) {
      dispatch(updateColumn({ title: columnTitle, boardId, columnId: id, order }));
      toggleIsEdit();
    }
  };

  /*   onDragEnd = (result: DropResult) => {
      const newTasks = Array.from(tasks);
      const { destination, source } = result;
      if (!destination) {
        return;
      }
      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return;
      }
      const [removed] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, removed);
      dispatch(updateTasksArray({ boardId: id || '', columnId: id, newTasks, tasks }));
    }; */

  return (
    <Draggable draggableId={String(id)} key={id} index={index}>
      {(provided) => (
        <ColumnContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          {!isEdit && (
            <HeaderColumn>
              <ColumnTitle onClick={toggleIsEdit}>{title}</ColumnTitle>
              <ColumnDeleteButton onClick={deleteColumn} title={t('boardPage.hintDeleteColumn')} />
            </HeaderColumn>
          )}
          {isEdit && (
            <ColumnTitleForm onSubmit={handleSubmit(onSubmit)}>
              <AcceptEditButton type="submit" />
              <ColumnTitleInput
                type="text"
                {...register('columnTitle', { required: true })}
                defaultValue={title}
                autoFocus
              />
              <CancelEditButton onClick={toggleIsEdit} />
            </ColumnTitleForm>
          )}
          <Droppable droppableId={String(id)} type="task" direction="vertical">
            {(dropProvided, snapshot) => (
              <TasksContainer
                ref={dropProvided.innerRef}
                {...dropProvided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, taskIndex) => {
                  return (
                    <Task
                      key={task.id}
                      task={task}
                      boardId={boardId}
                      columnId={id}
                      index={taskIndex}
                    />
                  );
                })}
                <NewTaskButton onClick={onClick}>{t('boardPage.addTaskBtn')}</NewTaskButton>
                {dropProvided.placeholder}
              </TasksContainer>
            )}
          </Droppable>
        </ColumnContainer>
      )}
    </Draggable>
  );
};

export default Column;
