import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../redux/hooks/reduxHooks';
import { authSelector } from '../../../redux/selectors/AuthSelectors';
import { RoutersMap } from '../../../utils/constants';
import LocalesCheckBox from '../localesCheckBox/LocalesCheckBox';
import { HeaderLink } from '../welcomePageHeader/styles';
import { BurgerType, BurgerWrapper } from './styles';

const NavBarBurger = ({ open }: BurgerType) => {
  const { token } = useAppSelector(authSelector);
  const { t } = useTranslation();

  return (
    <BurgerWrapper open={open}>
      <LocalesCheckBox id="burgerCheckBox" />
      {token ? (
        <HeaderLink to={RoutersMap.main}>{t('notFoundPageTranslation.linkTitle')}</HeaderLink>
      ) : (
        <>
          <HeaderLink to={RoutersMap.signIn}>{t('headerLinks.logIn')}</HeaderLink>
          <HeaderLink to={RoutersMap.signUp}>{t('headerLinks.signUp')}</HeaderLink>
        </>
      )}
    </BurgerWrapper>
  );
};

export default NavBarBurger;
