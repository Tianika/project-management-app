import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { setID } from '../../../redux/reducers/ConfirmWindowSlice';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { boardsSelector } from '../../../redux/selectors/BoardsSelector';
import { FunctionIds, ModalIds, ModalTypes, RoutersMap } from '../../../utils/constants';
import { BoardPreviewInfo, BoardPreviewStyled, RemoveBoardButton } from './styles';

const BoardPreview = () => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector(boardsSelector);
  const navigate = useNavigate();

  const openConfirmWindow = (id: string) => {
    dispatch(setID(id));
    dispatch(
      setModalChildren({
        modalId: ModalIds.confirmationWindow,
        modalType: ModalTypes.Window,
        functionId: FunctionIds.forBoard,
      })
    );
  };

  const transitionToBoard = (id: string) => {
    navigate(`${RoutersMap.board}/${id}`);
  };

  return (
    <>
      {boards.map(({ id, title, description }) => (
        <BoardPreviewStyled key={`board${id}`}>
          <BoardPreviewInfo onClick={() => transitionToBoard(id)}>
            <div>{title}</div>
            <div>{description}</div>
          </BoardPreviewInfo>

          <RemoveBoardButton onClick={() => openConfirmWindow(id)} />
        </BoardPreviewStyled>
      ))}
    </>
  );
};

export default BoardPreview;
