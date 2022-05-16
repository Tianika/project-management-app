import { useTranslation } from 'react-i18next';
import { batch } from 'react-redux';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { saveIdsForNewTask } from '../../../redux/reducers/BoardSlice';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { ModalIds, ModalTypes } from '../../../utils/constants';
import { ColumnType } from '../../../utils/types';
import Task from '../task/Task';
import { ColumnContainer, ColumnTitle, NewTaskButton, TasksContainer } from './styles';

const Column = ({
  column: { id, title, order, tasks },
  boardId,
}: {
  column: ColumnType;
  boardId: string | undefined;
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onClick = () => {
    batch(() => {
      dispatch(saveIdsForNewTask({ boardId, columnId: id }));
      dispatch(setModalChildren({ modalId: ModalIds.newTask, modalType: ModalTypes.Window }));
    });
  };

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
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
