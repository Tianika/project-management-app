import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { clearBoardData, saveBoardId } from '../../../redux/reducers/BoardSlice';
import { closeModal, setModalChildren } from '../../../redux/reducers/ModalSlice';
import { authSelector } from '../../../redux/selectors/AuthSelectors';
import { boardStateSelector } from '../../../redux/selectors/BoardSelectors';
import { requestBoard, updateColumnsArray } from '../../../redux/services/Board.api';
import { LoadingState, ModalIds, ModalTypes, RoutersMap } from '../../../utils/constants';
import Column from '../column/Column';
import {
  backgroundImgAnimal,
  backgroundImgBubbles,
  backgroundImgFox,
  backgroundImgGeometry,
  backgroundImgNature,
  BoardContainer,
  BoardTitle,
  ColumnsContainer,
  NewColumnButton,
  Select,
  StyledLink,
  WrapperSelect,
} from './styles';

const Board = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { id } = useParams();
  const { userId } = useAppSelector(authSelector);
  const [img, setImg] = useState('');

  const {
    boardData: { title, columns },
    isLoading,
  } = useAppSelector(boardStateSelector);

  useEffect(() => {
    if (id) {
      dispatch(requestBoard({ id }));
    }
    const prevState = JSON.parse(localStorage.getItem('backgroundImg') || '{}');
    setImg(prevState[userId]);
  }, []);

  useEffect(() => {
    if (isLoading === LoadingState.Initial || isLoading === LoadingState.Success) {
      dispatch(closeModal());
    }
    if (isLoading === LoadingState.Loading) {
      dispatch(setModalChildren({ modalId: ModalIds.loading, modalType: ModalTypes.Overlay }));
    }
    if (isLoading === LoadingState.Error) {
      dispatch(setModalChildren({ modalId: ModalIds.error, modalType: ModalTypes.Window }));
    }
    if (isLoading === LoadingState.Modal) {
      dispatch(setModalChildren({ modalId: ModalIds.taskView, modalType: ModalTypes.Window }));
    }
  }, [isLoading]);

  const onLinkClick = () => {
    dispatch(clearBoardData());
  };

  const onClick = () => {
    if (id) {
      dispatch(saveBoardId(id));
      dispatch(setModalChildren({ modalId: ModalIds.newColumn, modalType: ModalTypes.Window }));
    }
  };

  const onDragEnd = (result: DropResult) => {
    const newColumns = Array.from(columns);
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    const [removed] = newColumns.splice(source.index, 1);
    newColumns.splice(destination.index, 0, removed);
    dispatch(updateColumnsArray({ boardId: id || '', newColumns }));
  };

  const changeBackground = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();
    setImg(e.target.value);
    const prevSettings = JSON.parse(localStorage.getItem('backgroundImg') || '{}');
    prevSettings[userId] = e.target.value;
    localStorage.setItem('backgroundImg', JSON.stringify(prevSettings));
  };

  const imgBackground = () => {
    switch (img) {
      case 'fox':
        return backgroundImgFox;
      case 'bubbles':
        return backgroundImgBubbles;
      case 'animal':
        return backgroundImgAnimal;
      case 'nature':
        return backgroundImgNature;
      case 'geometry':
        return backgroundImgGeometry;
      default:
        return null;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BoardContainer image={imgBackground}>
        <WrapperSelect>
          <StyledLink to={RoutersMap.main} onClick={onLinkClick}>
            &laquo; {t('boardPage.buttonBack')}
          </StyledLink>
          <Select onChange={changeBackground} image={imgBackground} defaultvalue={img}>
            <option value="">{t('boardPage.chooseBackground')}</option>
            <option value="geometry">{t('boardPage.backgroundGeometry')}</option>
            <option value="bubbles">{t('boardPage.backgroundBubbles')}</option>
            <option value="fox">{t('boardPage.backgroundFox')}</option>
            <option value="animal">{t('boardPage.backgroundAnimal')}</option>
            <option value="nature">{t('boardPage.backgroundNature')}</option>
          </Select>
        </WrapperSelect>
        <BoardTitle>{title}</BoardTitle>
        <Droppable droppableId={String(id)} direction="horizontal" type="column">
          {(provided) => (
            <ColumnsContainer {...provided.droppableProps} ref={provided.innerRef}>
              {columns.map((column, index) => {
                return <Column key={column.id} column={column} boardId={id} index={index} />;
              })}

              <NewColumnButton onClick={onClick}>{t('boardPage.addColumnBtn')}</NewColumnButton>
              {provided.placeholder}
            </ColumnsContainer>
          )}
        </Droppable>
      </BoardContainer>
    </DragDropContext>
  );
};
export default Board;
