import { Wrapper } from '../../../styles/global';
import { RoutersMap } from '../../pages/WelcomPage/constant';
import { HeaderWrapper, HeaderLink } from '../../pages/WelcomPage/Styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <HeaderLink to={RoutersMap.login}>Log in</HeaderLink>
        <span>/</span>
        <HeaderLink to={RoutersMap.register}>Sign up</HeaderLink>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default Header;
