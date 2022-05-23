import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { RoutersMap } from '../../../utils/constants';
import {
  HeaderWrapper,
  HeaderLink,
  HeaderSeparator,
  headerTheme,
  activeHeaderTheme,
  LinksWrapper,
} from './styles';
import LocalesCheckBox from '../localesCheckBox/LocalesCheckBox';
import { useAppSelector } from '../../../redux/hooks/reduxHooks';
import { authSelector } from '../../../redux/selectors/AuthSelectors';
import BurgerBtn from '../burgerWelcomePage/BurgerBtn';

const WelcomePageHeader = () => {
  const { token } = useAppSelector(authSelector);
  const { t } = useTranslation();
  const [theme, setTheme] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <HeaderWrapper theme={theme ? activeHeaderTheme : headerTheme}>
      <BurgerBtn />
      <LinksWrapper>
        <LocalesCheckBox id="welcomeCheckBox" />
        {token ? (
          <HeaderLink to={RoutersMap.main}>{t('notFoundPageTranslation.linkTitle')}</HeaderLink>
        ) : (
          <>
            <HeaderLink to={RoutersMap.signIn}>{t('headerLinks.logIn')}</HeaderLink>
            <HeaderSeparator>|</HeaderSeparator>
            <HeaderLink to={RoutersMap.signUp}>{t('headerLinks.signUp')}</HeaderLink>
          </>
        )}
      </LinksWrapper>
    </HeaderWrapper>
  );
};

export default WelcomePageHeader;
