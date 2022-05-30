import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { createNewBoard } from '../../../redux/services/Boards.api';
import { ErrorMessage } from '../../../styles/global';
import { NewBoardButton, NewBoardInput, NewBoardForm, NewBoardTitle } from './styles';

const NewBoard = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FieldValues> = ({ title, description }) => {
    dispatch(createNewBoard({ title, description }));
  };

  return (
    <NewBoardForm onSubmit={handleSubmit(onSubmit)}>
      <NewBoardTitle>{t('newBoard.title')}</NewBoardTitle>
      <NewBoardInput
        type="text"
        {...register('title', { required: true })}
        placeholder={t('newBoard.titlePlaceholder')}
        autoFocus
      />
      <NewBoardInput
        type="text"
        {...register('description', { required: true })}
        placeholder={t('newBoard.descriptionPlaceholder')}
      />
      <ErrorMessage>
        {(errors.title || errors.description) && <p>{t('viewTask.error')}</p>}
      </ErrorMessage>
      <NewBoardButton type="submit">{t('newBoard.newBoardButton')}</NewBoardButton>
    </NewBoardForm>
  );
};

export default NewBoard;
