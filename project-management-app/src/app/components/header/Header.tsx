import { useNavigate } from 'react-router-dom';
import HeaderButton from '../headerButton/HeaderButton';
import { HeaderContainer } from './styles';
import { mainPageTranslation } from '../../../locales/mainPageTranslation';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { RoutersMap, ModalIds, ModalTypes } from '../../../utils/constants';
import LocalesCheckBox from '../localesCheckBox/LocalesCheckBox';

const language = 'ru';

const { editButton, createButton, logoutButton } = mainPageTranslation[language];

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const BUTTONS = [
    {
      text: editButton,
      onClick: () => {
        navigate(RoutersMap.edit);
      },
    },
    {
      text: createButton,
      onClick: () => {
        dispatch(setModalChildren({ modalId: ModalIds.newBoard, modalType: ModalTypes.Window }));
      },
    },
    {
      text: logoutButton,
      onClick: () => {},
    },
  ];

  return (
    <HeaderContainer>
      <LocalesCheckBox />
      {BUTTONS.map(({ text, onClick }) => {
        return <HeaderButton key={text} text={text} onClick={onClick} />;
      })}
    </HeaderContainer>
  );
};

export default Header;
