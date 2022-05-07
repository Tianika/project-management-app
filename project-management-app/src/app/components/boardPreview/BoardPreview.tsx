import { SyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { deleteBoard } from '../../../redux/reducers/BoardsSlice';
import { BoardsSelector } from '../../../redux/selectors/BoardsSelector';
import { BoardPreviewInfo, BoardPreviewStyled, RemoveBoardButton } from './styles';

const openBoard = ({ target }: SyntheticEvent<HTMLElement>) => {
  if (target instanceof HTMLElement) {
    // дальше используем target.dataset.boardid
  }
};

const BoardPreview = () => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector(BoardsSelector);

  const removeBoard = ({ target }: SyntheticEvent<HTMLElement>) => {
    if (target instanceof HTMLElement) {
      const { removeid } = target.dataset;

      if (removeid) {
        dispatch(deleteBoard({ id: removeid }));
      }
    }
  };

  return (
    <>
      {boards.map(({ id, title }) => (
        <BoardPreviewStyled key={`board${id}`}>
          <BoardPreviewInfo data-boardid={id} onClick={openBoard}>
            {title}
          </BoardPreviewInfo>
          <RemoveBoardButton data-removeid={id} onClick={removeBoard}>
            X
          </RemoveBoardButton>
        </BoardPreviewStyled>
      ))}
    </>
  );
};

export default BoardPreview;
