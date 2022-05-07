import { ChangeEvent, useState } from 'react';
import { mainPageTranslation } from '../../../locales/mainPageTranslation';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { createNewBoard } from '../../../redux/reducers/BoardsSlice';
import { NewBoardButton, NewBoardInput, NewBoardStyles, NewBoardTitle } from './styles';

const language = 'ru';

const { newBoardTitle, newBoardBtn } = mainPageTranslation[language];

const NewBoard = () => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const createBoard = () => {
    if (title) {
      dispatch(createNewBoard({ title }));
    }
  };

  return (
    <NewBoardStyles>
      <NewBoardTitle>{newBoardTitle}</NewBoardTitle>
      <NewBoardInput type="text" onChange={handleChange} />
      <NewBoardButton type="submit" onClick={createBoard}>
        {newBoardBtn}
      </NewBoardButton>
    </NewBoardStyles>
  );
};

export default NewBoard;
