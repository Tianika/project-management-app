import Boards from '../../components/boards/Boards';
import MainPageHeader from '../../components/mainPageHeader/MainPageHeader';
import { MainPageContainer } from './styles';

const MainPage = () => {
  return (
    <MainPageContainer>
      <MainPageHeader />
      <Boards />
    </MainPageContainer>
  );
};

export default MainPage;
