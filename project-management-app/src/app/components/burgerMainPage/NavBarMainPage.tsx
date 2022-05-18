import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { loginFormSlice } from '../../../redux/reducers/LoginFormSlice';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { RoutersMap, ModalIds, ModalTypes } from '../../../utils/constants';
import { BurgerType, BurgerWrapper } from '../burgerWelcomePage/styles';
import HeaderButton from '../headerButton/HeaderButton';
import LocalesCheckBox from '../localesCheckBox/LocalesCheckBox';

const NavBarMainPage = ({ open }: BurgerType) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setToken } = loginFormSlice.actions;
  const { t } = useTranslation();
  const loc = document.location;
  const { id } = useParams();

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
    <BurgerWrapper open={open}>
      <LocalesCheckBox id="mainBurgerCheckBox" />
      {loc.pathname === `${RoutersMap.board}/${id}` || loc.pathname === `${RoutersMap.edit}`
        ? BUTTONSBBOARDPAGE.map(({ text, onClick }) => {
            return <HeaderButton key={text} text={text} onClick={onClick} />;
          })
        : BUTTONS.map(({ text, onClick }) => {
            return <HeaderButton key={text} text={text} onClick={onClick} />;
          })}
    </BurgerWrapper>
  );
};

export default NavBarMainPage;
