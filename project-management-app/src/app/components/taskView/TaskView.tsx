import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import {
  AcceptTaskEditButton,
  CancelTaskEditButton,
  TaskViewButtons,
  TaskViewDescription,
  TaskViewForm,
  TaskViewTitle,
} from './styles';

const TaskView = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();

  const [isEdit, setIsEdit] = useState(false);

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <TaskViewForm>
      <TaskViewTitle>Title</TaskViewTitle>
      <TaskViewDescription>description</TaskViewDescription>
      <TaskViewButtons>
        <AcceptTaskEditButton />
        <CancelTaskEditButton />
      </TaskViewButtons>
    </TaskViewForm>
  );
};

export default TaskView;
