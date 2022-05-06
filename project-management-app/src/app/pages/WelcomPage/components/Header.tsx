import { RoutersMap } from '../constant';
import { HeaderWrapper, Wrapper, HeaderLink } from '../Styles';

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