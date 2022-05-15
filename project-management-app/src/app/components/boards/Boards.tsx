import { useEffect } from 'react';
import { mainPageTranslation } from '../../../locales/mainPageTranslation';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { requestBoards } from '../../../redux/reducers/BoardsSlice';
import { closeModal, setModalChildren } from '../../../redux/reducers/ModalSlice';
import { boardsStateSelector } from '../../../redux/selectors/BoardsSelector';
import { LoadingState, ModalIds, ModalTypes } from '../../../utils/constants';
import BoardPreview from '../boardPreview/BoardPreview';
import { BoardsContainer, BoardsTitle } from './styles';

const language = 'ru';

const { boardsTitle } = mainPageTranslation[language];

const Boards = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isFetching, boards } = useAppSelector(boardsStateSelector);

  useEffect(() => {
    if (!boards.length) {
      dispatch(requestBoards());
    }
  }, []);

  useEffect(() => {
    if (isFetching) {
      dispatch(requestBoards());
    }
  }, [isFetching]);

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

  return (
    <BoardsContainer>
      <BoardsTitle>{boardsTitle}</BoardsTitle>
      <BoardPreview />
    </BoardsContainer>
  );
};

export default Boards;
