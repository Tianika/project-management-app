import Boards from '../../components/boards/Boards';
import Header from '../../components/header/Header';
import { MainPageContainer } from './styles';

const MainPage = () => {
  return (
    <MainPageContainer>
      <Header />
      <Boards />
    </MainPageContainer>
  );
};

export default MainPage;
