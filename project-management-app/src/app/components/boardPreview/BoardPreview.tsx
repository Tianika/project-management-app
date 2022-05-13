import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { setID } from '../../../redux/reducers/ConfirmWindowSlice';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { BoardsSelector } from '../../../redux/selectors/BoardsSelector';
import { ModalIds, ModalTypes, RoutersMap } from '../../../utils/constants';
import { saveBoardId } from '../../../redux/reducers/BoardSlice';
import { BoardPreviewInfo, BoardPreviewStyled, RemoveBoardButton } from './styles';

const BoardPreview = () => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector(BoardsSelector);
  const navigate = useNavigate();

  const openBoard = ({ target }: SyntheticEvent<HTMLElement>) => {
    if (target instanceof HTMLElement) {
      const { boardid } = target.dataset;

      if (boardid) {
        dispatch(saveBoardId(boardid));
        navigate(RoutersMap.board);
      }
    }
  };

  const openConfirmWindow = ({ target }: SyntheticEvent<HTMLElement>) => {
    if (target instanceof HTMLElement) {
      const { removeid } = target.dataset;
      if (removeid) {
        dispatch(setID(removeid));
        dispatch(
          setModalChildren({ modalId: ModalIds.confirmationWindow, modalType: ModalTypes.Window })
        );
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
          <RemoveBoardButton data-removeid={id} onClick={openConfirmWindow}>
            X
          </RemoveBoardButton>
        </BoardPreviewStyled>
      ))}
    </>
  );
};

export default BoardPreview;
