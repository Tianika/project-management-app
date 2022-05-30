import { useTranslation } from 'react-i18next';
import { ColumnCenteredWrapper, H1 } from '../../../styles/global';
import SignInForm from '../../components/signInForm/SignInForm';
import WelcomePageHeader from '../../components/welcomePageHeader/WelcomePageHeader';

const SignInPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <WelcomePageHeader />
      <ColumnCenteredWrapper>
        <H1>{t('authentication.loginPageTitle')}</H1>
        <SignInForm />
      </ColumnCenteredWrapper>
    </>
  );
};

export default SignInPage;
