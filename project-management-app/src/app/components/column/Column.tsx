import { useState } from 'react';
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
}: {
  column: ColumnType;
  boardId: string | undefined;
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

  return (
    <ColumnContainer>
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

      <TasksContainer>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} boardId={boardId} columnId={id} />;
        })}

        <NewTaskButton onClick={onClick}>{t('boardPage.addTaskBtn')}</NewTaskButton>
      </TasksContainer>
    </ColumnContainer>
  );
};

export default Column;
