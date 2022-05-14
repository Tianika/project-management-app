import i18n from '../../../i18n';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel, CheckBoxTitle } from './styles';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { changeToggle } from '../../../redux/reducers/LanguageSlice';
import { toggleLangSelector } from '../../../redux/selectors/LanguageSelectors';

const LocalesCheckBox = () => {
  const toggleLang = useAppSelector(toggleLangSelector);
  const dispatch = useAppDispatch();

  const changeLanguage = () => {
    i18n.changeLanguage(toggleLang ? 'ru' : 'en');
    dispatch(changeToggle(!toggleLang));
  };

  return (
    <CheckBoxWrapper>
      <CheckBoxTitle>ru</CheckBoxTitle>
      <CheckBox
        onClick={changeLanguage}
        defaultChecked={toggleLang}
        id="checkbox"
        type="checkbox"
      />
      <CheckBoxLabel htmlFor="checkbox" />
      <CheckBoxTitle>en</CheckBoxTitle>
    </CheckBoxWrapper>
  );
};

export default LocalesCheckBox;
