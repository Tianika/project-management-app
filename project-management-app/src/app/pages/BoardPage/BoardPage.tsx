import Board from '../../components/board/Board';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { BoardPageContainer } from './styles';

const BoardPage = () => {
  return (
    <BoardPageContainer>
      <Header />
      <Board />
      <Footer />
    </BoardPageContainer>
  );
};

export default BoardPage;
