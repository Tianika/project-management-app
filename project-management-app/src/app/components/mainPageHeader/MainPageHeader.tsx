import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import HeaderButton from '../headerButton/HeaderButton';
import { HeaderContainer, headerTheme } from './styles';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { RoutersMap, ModalIds, ModalTypes } from '../../../utils/constants';
import LocalesCheckBox from '../localesCheckBox/LocalesCheckBox';
import { loginFormSlice } from '../../../redux/reducers/LoginFormSlice';
import { activeHeaderTheme, LinksWrapper } from '../welcomePageHeader/styles';
import MainPageBurgerBtn from '../burgerMainPage/MainPageBurgerBtn';

const MainPageHeader = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setToken } = loginFormSlice.actions;
  const { t } = useTranslation();
  const [theme, setTheme] = useState(false);
  const loc = document.location;
  const { id } = useParams();

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

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

  const BUTTONSBBOARDPAGE = [
    {
      text: t('mainPageHeader.editButton'),
      onClick: () => {
        navigate(RoutersMap.edit);
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
    <HeaderContainer theme={theme ? activeHeaderTheme : headerTheme}>
      <MainPageBurgerBtn />
      <LinksWrapper>
        <LocalesCheckBox id="mainCheckBox" />
        {loc.pathname === `${RoutersMap.board}/${id}` || loc.pathname === `${RoutersMap.edit}`
          ? BUTTONSBBOARDPAGE.map(({ text, onClick }) => {
              return <HeaderButton key={text} text={text} onClick={onClick} />;
            })
          : BUTTONS.map(({ text, onClick }) => {
              return <HeaderButton key={text} text={text} onClick={onClick} />;
            })}
      </LinksWrapper>
    </HeaderContainer>
  );
};

export default MainPageHeader;
