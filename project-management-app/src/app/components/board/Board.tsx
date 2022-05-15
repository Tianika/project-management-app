import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { requestBoard } from '../../../redux/reducers/BoardSlice';
import { boardIdSelector } from '../../../redux/selectors/BoardSelectors';
import { LOCAL_STORAGE_KEYS, RoutersMap } from '../../../utils/constants';
import Column from '../column/Column';
import { BoardContainer, BoardTitle, ColumnsContainer, NewColumnButton } from './styles';

const language = 'ru';

const Board = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const boardId = useAppSelector(boardIdSelector);

  useEffect(() => {
    const id: string | null = boardId || localStorage.getItem(LOCAL_STORAGE_KEYS.boardId);

    if (id) {
      dispatch(requestBoard({ id }));
    } else {
      navigate(RoutersMap.main);
    }
  }, []);

  return (
    <BoardContainer>
      <BoardTitle>Board title</BoardTitle>
      <ColumnsContainer>
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <NewColumnButton>Add Column</NewColumnButton>
      </ColumnsContainer>
    </BoardContainer>
  );
};

export default Board;
