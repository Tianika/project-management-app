import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import GlobalStyle from './style';
// import MainPage from './pages/MainPage/MainPage';
import BoardPage from './pages/BoardPage/BoardPage';
import Modal from './components/modal/Modal';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import WelcomePage from './pages/WelcomPage/WelcomePage';
import { RoutersMap } from '../utils/constants';
import PrivateRoute from '../hoc/PrivateRoute';
import AnonymousRoute from '../hoc/AnonymousRoute';
import { useSaveTokenToLocalStorage } from '../services/useSaveTokenToLocalStorage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import EditProfilePage from './pages/EditProfilePage/EditProfilePage';
import InjectAxiosInterceptors from './components/injectAxiosInterceptors/InjectAxiosInterceptors';
import { ContentWrapp, WrapperApp } from '../styles/global';
import Footer from './components/footer/Footer';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));

const App = () => {
  useSaveTokenToLocalStorage();

  return (
    <>
      <GlobalStyle />
      <WrapperApp>
        <ContentWrapp>
          <InjectAxiosInterceptors />
          <Routes>
            <Route path={RoutersMap.welcome} element={<WelcomePage />} />
            <Route
              path={RoutersMap.signIn}
              element={
                <AnonymousRoute redirectPath={RoutersMap.main}>
                  <SignInPage />
                </AnonymousRoute>
              }
            />
            <Route
              path={RoutersMap.signUp}
              element={
                <AnonymousRoute redirectPath={RoutersMap.main}>
                  <SignUpPage />
                </AnonymousRoute>
              }
            />
            <Route
              path={RoutersMap.main}
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            />
            <Route
              path={`${RoutersMap.board}/:id`}
              element={
                <PrivateRoute>
                  <BoardPage />
                </PrivateRoute>
              }
            />
            <Route
              path={RoutersMap.edit}
              element={
                <PrivateRoute>
                  <EditProfilePage />
                </PrivateRoute>
              }
            />
            <Route path={RoutersMap.notFound} element={<NotFoundPage />} />
          </Routes>
        </ContentWrapp>
        <Footer />
      </WrapperApp>
      <Modal />
    </>
  );
};

export default App;
