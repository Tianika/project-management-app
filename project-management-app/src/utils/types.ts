export type BoardsType = {
  id: string;
  title: string;
};

export type ColumnType = {
  columns: Array<TaskType>;
};

export type TaskType = {
  id: string;
  title: string;
  order: number;
  done: boolean;
  description: string;
  userId: string;
  files: Array<TaskFilesType>;
};

export type TaskFilesType = {
  filename: string;
  fileSize: number;
};

export type UserType = {
  id: string;
  name: string;
  login: string;
  password: string;
};
