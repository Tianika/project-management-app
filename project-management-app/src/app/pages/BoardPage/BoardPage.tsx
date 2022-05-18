import Board from '../../components/board/Board';
import Footer from '../../components/footer/Footer';
import MainPageHeader from '../../components/mainPageHeader/MainPageHeader';
import { BoardPageContainer } from './styles';

const BoardPage = () => {
  return (
    <BoardPageContainer>
      <MainPageHeader />
      <Board />
      <Footer />
    </BoardPageContainer>
  );
};

export default BoardPage;
