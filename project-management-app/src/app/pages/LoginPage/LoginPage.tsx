import React from 'react';
import { useTranslation } from 'react-i18next';
import { ColumnCenteredWrapper, H1 } from '../../../styles/global';
import LoginForm from '../../components/LoginForm/LoginForm';
import WelcomePageHeader from '../../components/welcomePageHeader/WelcomePageHeader';
import Footer from '../../components/footer/Footer';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <WelcomePageHeader />
      <ColumnCenteredWrapper>
        <H1>{t('authentication.loginPageTitle')}</H1>
        <LoginForm />
      </ColumnCenteredWrapper>
      <Footer />
    </>
  );
};

export default LoginPage;
