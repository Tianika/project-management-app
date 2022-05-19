import { useState } from 'react';
import { StyledBurger } from '../burgerWelcomePage/styles';
import NavBarMainPage from './NavBarMainPage';

const BurgerBtn = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <StyledBurger open={opened} onClick={() => setOpened(!opened)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavBarMainPage open={opened} />
    </>
  );
};

export default BurgerBtn;
