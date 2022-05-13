import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { mainPageTranslation } from '../../../locales/mainPageTranslation';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { createNewBoard } from '../../../redux/reducers/BoardsSlice';
import { NewBoardButton, NewBoardInput, NewBoardForm, NewBoardTitle } from './styles';

const language = 'ru';

const { newBoardTitle, newBoardBtn, placeholder } = mainPageTranslation[language];

const NewBoard = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = ({ title }) => {
    dispatch(createNewBoard({ title }));
  };

  return (
    <NewBoardForm onSubmit={handleSubmit(onSubmit)}>
      <NewBoardTitle>{newBoardTitle}</NewBoardTitle>
      <NewBoardInput
        type="text"
        {...register('title', { required: true })}
        placeholder={placeholder}
        autoFocus
      />
      <NewBoardButton type="submit">{newBoardBtn}</NewBoardButton>
    </NewBoardForm>
  );
};

export default NewBoard;
