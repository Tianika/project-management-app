import { useState } from 'react';
import NavBarBurger from './NavBarBurger';
import { StyledBurger } from './styles';

const BurgerBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavBarBurger open={open} />
    </>
  );
};

export default BurgerBtn;
