import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import Task from '../task/Task';
import { ColumnContainer, ColumnTitle, NewTaskButton, TasksContainer } from './styles';

const language = 'ru';

const Column = () => {
  const dispatch = useAppDispatch();

  return (
    <ColumnContainer>
      <ColumnTitle>Title</ColumnTitle>
      <TasksContainer>
        <Task />
        <Task />
        <Task />
        <Task />
        <NewTaskButton>Add task</NewTaskButton>
      </TasksContainer>
    </ColumnContainer>
  );
};

export default Column;
