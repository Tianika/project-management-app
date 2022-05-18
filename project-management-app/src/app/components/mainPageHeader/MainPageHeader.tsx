import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HeaderButton from '../headerButton/HeaderButton';
import { HeaderContainer } from './styles';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { RoutersMap, ModalIds, ModalTypes } from '../../../utils/constants';
import LocalesCheckBox from '../localesCheckBox/LocalesCheckBox';
import { loginFormSlice } from '../../../redux/reducers/LoginFormSlice';

const MainPageHeader = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setToken } = loginFormSlice.actions;
  const { t } = useTranslation();

  const BUTTONS = [
    {
      text: t('mainPageHeader.editButton'),
      onClick: () => {
        navigate(RoutersMap.edit);
      },
    },
    {
      text: t('mainPageHeader.createButton'),
      onClick: () => {
        dispatch(setModalChildren({ modalId: ModalIds.newBoard, modalType: ModalTypes.Window }));
      },
    },
    {
      text: t('mainPageHeader.logoutButton'),
      onClick: () => {
        dispatch(setToken(''));
        localStorage.setItem('token', '');
        navigate(RoutersMap.login);
      },
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

export default MainPageHeader;
