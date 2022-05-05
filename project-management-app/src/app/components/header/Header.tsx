import HeaderButton from '../headerButton/HeaderButton';
import { HeaderContainer } from './styles';
import { mainPageTranslation } from '../../../locales/mainPageTranslation';

const buttons = [
  {
    text: mainPageTranslation.ru.editButton,
    onClick: () => {},
  },
  {
    text: mainPageTranslation.ru.createButton,
    onClick: () => {},
  },
  {
    text: mainPageTranslation.ru.logoutButton,
    onClick: () => {},
  },
];

const Header = () => {
  return (
    <HeaderContainer>
      {buttons.map(({ text, onClick }) => {
        return <HeaderButton key={text} text={text} onClick={onClick} />;
      })}
    </HeaderContainer>
  );
};

export default Header;
