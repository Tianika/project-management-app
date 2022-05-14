import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './style';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import BoardPage from './pages/BoardPage/BoardPage';
import Modal from './components/modal/Modal';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import WelcomePage from './pages/WelcomPage/WelcomePage';
import { RoutersMap } from '../utils/constants';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={RoutersMap.welcome} element={<WelcomePage />} />
        <Route path={RoutersMap.login} element={<LoginPage />} />
        <Route path={RoutersMap.register} element={<RegisterPage />} />
        <Route path={RoutersMap.main} element={<MainPage />} />
        <Route path={RoutersMap.board} element={<BoardPage />} />
        <Route path={RoutersMap.notFound} element={<NotFoundPage />} />
      </Routes>
      <Modal />
    </>
  );
};

export default App;
