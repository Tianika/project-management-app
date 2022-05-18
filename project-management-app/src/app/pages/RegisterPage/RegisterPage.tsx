import React from 'react';
import { useTranslation } from 'react-i18next';
import WelcomePageHeader from '../../components/welcomePageHeader/WelcomePageHeader';
import { ColumnCenteredWrapper, H1 } from '../../../styles/global';
import Footer from '../../components/footer/Footer';
import RegisterForm from '../../components/registerForm/RegisterForm';

const RegisterPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <WelcomePageHeader />
      <ColumnCenteredWrapper>
        <H1>{t('authentication.registerPageTitle')}</H1>
        <RegisterForm />
      </ColumnCenteredWrapper>
      <Footer />
    </>
  );
};

export default RegisterPage;
