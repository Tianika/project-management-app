import React from 'react';
import { ColumnCenteredWrapper, H1 } from '../../../styles/global';
import LoginForm from '../../components/LoginForm/LoginForm';
import WelcomePageHeader from '../../components/welcomePageHeader/WelcomePageHeader';
import Footer from '../../components/footer/Footer';
import { loginPageTranslation } from '../../../locales/LoginPageTranslation';

const LoginPage = () => {
  const { loginPageTitle } = loginPageTranslation.ru;

  return (
    <>
      <WelcomePageHeader />
      <ColumnCenteredWrapper>
        <H1>{loginPageTitle}</H1>
        <LoginForm />
      </ColumnCenteredWrapper>
      <Footer />
    </>
  );
};

export default LoginPage;
