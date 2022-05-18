import { useTranslation } from 'react-i18next';
import { Wrapper } from '../../../styles/global';
import { RoutersMap } from '../../../utils/constants';
import { HeaderWrapper, HeaderLink, HeaderSeparator } from './styles';
import LocalesCheckBox from '../localesCheckBox/LocalesCheckBox';
import { useAppSelector } from '../../../redux/hooks/reduxHooks';
import { loginSelector } from '../../../redux/selectors/AuthSelectors';

const WelcomePageHeader = () => {
  const { token } = useAppSelector(loginSelector);
  const { t } = useTranslation();

  return (
    <HeaderWrapper>
      <Wrapper>
        <LocalesCheckBox />
        {token ? (
          <HeaderLink to={RoutersMap.main}>{t('notFoundPageTranslation.linkTitle')}</HeaderLink>
        ) : (
          <>
            <HeaderLink to={RoutersMap.login}>{t('headerLinks.logIn')}</HeaderLink>
            <HeaderSeparator>|</HeaderSeparator>
            <HeaderLink to={RoutersMap.register}>{t('headerLinks.signUp')}</HeaderLink>
          </>
        )}
      </Wrapper>
    </HeaderWrapper>
  );
};

export default WelcomePageHeader;
