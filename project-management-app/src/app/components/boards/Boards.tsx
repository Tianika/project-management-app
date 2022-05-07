import { useEffect } from 'react';
import { mainPageTranslation } from '../../../locales/mainPageTranslation';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { requestBoards } from '../../../redux/reducers/BoardsSlice';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { BoardsStateSelector } from '../../../redux/selectors/BoardsSelector';
import { LoadingState, ModalIds, ModalTypes } from '../../../utils/constants';
import BoardPreview from '../boardPreview/BoardPreview';
import { BoardsContainer, BoardsTitle } from './styles';

const language = 'ru';

const { boardsTitle } = mainPageTranslation[language];

const Boards = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isFetching } = useAppSelector(BoardsStateSelector);

  useEffect(() => {
    dispatch(requestBoards());
  }, []);

  useEffect(() => {
    if (isFetching) {
      dispatch(requestBoards());
    }
  }, [isFetching]);

  useEffect(() => {
    if (isLoading === LoadingState.Initial || isLoading === LoadingState.Success) {
      dispatch(setModalChildren({ modalId: ModalIds.empty, modalType: ModalTypes.Window }));
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
