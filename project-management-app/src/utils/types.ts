import { LoadingState } from './constants';

export type BoardsType = {
  id: string;
  title: string;
  description: string;
};

export type ColumnType = {
  id: string;
  title: string;
  order: number;
  tasks: Array<TaskType>;
};

export type TaskType = {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  files?: Array<TaskFilesType>;
};

export type TaskFilesType = {
  filename: string;
  fileSize: number;
};

export type UserResponseType = {
  id: string;
  name: string;
  login: string;
};

export type UserType = UserResponseType & {
  password: string;
};

export type TaskResponseType = {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
  files: Array<TaskFilesType>;
};

export type BoardDataType = { id: string; title: string; columns: Array<ColumnType> };

export type BoardState = {
  boardId: string;
  columnId: string;
  taskId: string;
  boardData: BoardDataType;
  taskData: TaskResponseType;
  isLoading: LoadingState;
  isError: boolean;
  errorMessage: string;
  users: Array<UserResponseType>;
};

export type RequestTaskType = {
  title: string;
  description: string;
  boardId: string;
  columnId: string;
  userId: string;
};

export type CreateTaskActionProps = { boardId: string | undefined; columnId: string };

export type UpdateTaskActionProps = CreateTaskActionProps & {
  taskId: string;
};

export type RequestColumnType = {
  title: string;
  boardId: string;
};

export type ColumnResponseType = {
  id: string;
  title: string;
  order: number;
};

export type UpdateColumnType = {
  title: string;
  boardId: string;
  columnId: string;
  order: number;
};

export type UpdateTaskType = {
  title: string;
  order: number;
  description: string;
  boardId: string;
  columnId: string;
  taskId: string;
  userId: string;
};

export type UpdateColumnsArrayType = {
  boardId: string;
  newColumns: Array<ColumnType>;
};

export type IdsForRequest = {
  boardId: string;
  columnId: string;
  taskId: string;
};

export type TaskViewResponseType = {
  task: TaskResponseType;
  users: Array<{ id: string; name: string; login: string }>;
};
