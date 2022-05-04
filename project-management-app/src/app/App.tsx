import { Route, Routes } from 'react-router-dom';
import { BoardPage } from './pages/BoardPage/BoardPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { MainPage } from './pages/MainPage/MainPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { WelcomePage } from './pages/WelcomPage/WelcomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/board" element={<BoardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
