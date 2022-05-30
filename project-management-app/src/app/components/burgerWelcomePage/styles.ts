import styled from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';

export type BurgerType = {
  open?: boolean;
  opened?: boolean;
  setOpened?: () => void;
};

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  z-index: 20;
  display: none;
  ${adaptive.maxWidth.mobile} {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    caret-color: transparent;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }: BurgerType) =>
      open ? colors.lightShadowScroll : colors.lightFont};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }: BurgerType) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }: BurgerType) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }: BurgerType) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }: BurgerType) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const BurgerWrapper = styled.div`
  display: none;
  ${adaptive.maxWidth.tablet} {
    display: flex;
    gap: 1rem;
    flex-flow: column nowrap;
    align-items: center;
    background-color: ${colors.secondaryBg};
    position: fixed;
    transform: ${({ open }: BurgerType) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 12rem;
    max-width: 15rem;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;
  }
`;
