import { RootState } from '../store/store';

export const toggleLangSelector = (state: RootState) => {
  return state.changeToggleReducer.toggleLang;
};
