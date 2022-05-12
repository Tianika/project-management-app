import { useTranslation } from 'react-i18next';
import { Wrapper } from '../../../styles/global';
import { RoutersMap } from '../../pages/WelcomPage/constant';
import { HeaderWrapper, HeaderLink } from '../../pages/WelcomPage/Styles';
import LocalesCheckBox from '../localesCheckBox/LocalesCheckBox';

const Header = () => {
  const { t } = useTranslation();
  return (
    <HeaderWrapper>
      <Wrapper>
        <LocalesCheckBox />
        <HeaderLink to={RoutersMap.login}>{t('headerLinks.logIn')}</HeaderLink>
        <span>/</span>
        <HeaderLink to={RoutersMap.register}>{t('headerLinks.signUp')}</HeaderLink>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default Header;
