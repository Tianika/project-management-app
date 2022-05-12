import HeaderButton from '../headerButton/HeaderButton';
import { HeaderContainer } from './styles';
import { mainPageTranslation } from '../../../locales/mainPageTranslation';
import LocalesCheckBox from '../localesCheckBox/LocalesCheckBox';

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
      <LocalesCheckBox />
      {buttons.map(({ text, onClick }) => {
        return <HeaderButton key={text} text={text} onClick={onClick} />;
      })}
    </HeaderContainer>
  );
};

export default Header;
