import { HeaderButtonStyled } from './styles';

type HeaderButtonType = {
  text: string;
  onClick: () => void;
};

const HeaderButton = ({ text, onClick }: HeaderButtonType) => {
  return <HeaderButtonStyled onClick={onClick}>{text}</HeaderButtonStyled>;
};

export default HeaderButton;
