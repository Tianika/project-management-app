import { TaskContainer, TaskDescription, TaskTitle } from './styles';

const Task = () => {
  return (
    <TaskContainer>
      <TaskTitle>Task title</TaskTitle>
      <TaskDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </TaskDescription>
    </TaskContainer>
  );
};

export default Task;
