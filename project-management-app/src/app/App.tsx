import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './style';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import BoardPage from './pages/BoardPage/BoardPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { setupStore } from '../redux/store/store';
import WelcomePage from './pages/WelcomPage/WelcomePage';

const App = () => {
  const store = setupStore();

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
