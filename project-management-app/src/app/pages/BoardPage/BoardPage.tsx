import Board from '../../components/board/Board';
import MainPageHeader from '../../components/mainPageHeader/MainPageHeader';
import { BoardPageContainer } from './styles';

const BoardPage = () => {
  return (
    <BoardPageContainer>
      <MainPageHeader />
      <Board />
    </BoardPageContainer>
  );
};

export default BoardPage;
