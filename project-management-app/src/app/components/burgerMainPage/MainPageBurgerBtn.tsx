import { useState } from 'react';
import { StyledBurger } from '../burgerWelcomePage/styles';
import NavBarMainPage from './NavBarMainPage';

const BurgerBtn = () => {
  const [opened, setOpened] = useState(false);

  const setOpenedCallback: () => void = () => {
    setOpened(!opened);
  };

  return (
    <>
      <StyledBurger open={opened} onClick={setOpenedCallback}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavBarMainPage open={opened} setOpened={setOpenedCallback} />
    </>
  );
};

export default BurgerBtn;
