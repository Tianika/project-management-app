import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { clearBoardData, saveBoardId } from '../../../redux/reducers/BoardSlice';
import { closeModal, setModalChildren } from '../../../redux/reducers/ModalSlice';
import { boardStateSelector } from '../../../redux/selectors/BoardSelectors';
import { requestBoard } from '../../../redux/services/Board.api';
import { LoadingState, ModalIds, ModalTypes, RoutersMap } from '../../../utils/constants';
import Column from '../column/Column';
import {
  BoardContainer,
  BoardTitle,
  ColumnsContainer,
  NewColumnButton,
  StyledLink,
} from './styles';

const Board = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { id } = useParams();

  const {
    boardData: { title, columns },
    isLoading,
  } = useAppSelector(boardStateSelector);

  useEffect(() => {
    if (id) {
      dispatch(requestBoard({ id }));
    }
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

  return (
    <BoardContainer>
      <StyledLink to={RoutersMap.main} onClick={onLinkClick}>
        &laquo; {t('boardPage.buttonBack')}
      </StyledLink>
      <BoardTitle>{title}</BoardTitle>
      <ColumnsContainer>
        {columns.map((column) => {
          return <Column key={column.id} column={column} boardId={id} />;
        })}

        <NewColumnButton onClick={onClick}>{t('boardPage.addColumnBtn')}</NewColumnButton>
      </ColumnsContainer>
    </BoardContainer>
  );
};

export default Board;
