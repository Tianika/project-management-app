import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { saveBoardId } from '../../../redux/reducers/BoardSlice';
import { setID } from '../../../redux/reducers/ConfirmWindowSlice';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { boardsSelector } from '../../../redux/selectors/BoardsSelector';
import { FunctionIds, ModalIds, ModalTypes, RoutersMap } from '../../../utils/constants';
import {
  BoardDescription,
  BoardDescriptionContainer,
  BoardEditButton,
  BoardPreviewInfo,
  BoardPreviewStyled,
  BoardTitle,
  RemoveBoardButton,
} from './styles';

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

  const editBoard = (event: Event, id: string) => {
    event.stopPropagation();
    dispatch(saveBoardId(id));
    dispatch(
      setModalChildren({
        modalId: ModalIds.editBoard,
        modalType: ModalTypes.Window,
        functionId: FunctionIds.forTask,
      })
    );
  };

  return (
    <>
      {boards.map(({ id, title, description }) => (
        <BoardPreviewStyled key={`board${id}`}>
          <BoardPreviewInfo onClick={() => transitionToBoard(id)}>
            <BoardDescriptionContainer>
              <BoardTitle>{title}</BoardTitle>
              <BoardDescription>{description}</BoardDescription>
            </BoardDescriptionContainer>
            <BoardEditButton
              onClick={(event: Event) => {
                editBoard(event, id);
              }}
            />
          </BoardPreviewInfo>

          <RemoveBoardButton onClick={() => openConfirmWindow(id)} />
        </BoardPreviewStyled>
      ))}
    </>
  );
};

export default BoardPreview;
