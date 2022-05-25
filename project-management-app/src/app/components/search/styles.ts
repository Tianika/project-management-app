import styled from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';
import { TaskViewInput } from '../taskView/styles';
import searchIcon from '../../../assets/svg/search.svg';
import clearIcon from '../../../assets/svg/clear.svg';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-width: 50vw;
  min-height: 3em;
  background-color: ${colors.baseBg};
  border-radius: 5px;
  padding: 10px;
  margin: 0 auto 10px;
  font-size: 22px;

  ${adaptive.maxWidth.tablet} {
    min-width: 70vw;
    font-size: 18px;
    padding: 7px;
    gap: 15px;
  }

  ${adaptive.maxWidth.mobile} {
    min-width: 80vw;
    font-size: 16px;
    padding: 5px;
    gap: 5px;
  }
`;

export const SearchTitle = styled.h2`
  color: ${colors.darkFont};
  font-size: 0.8em;
  font-weight: 500;

  ${adaptive.maxWidth.mobile} {
    font-size: 0;
  }
`;

export const SearchInput = styled(TaskViewInput)`
  font-size: 0.7em;
  width: 11.5em;
  padding: 0 5px;
`;

export const SearchButton = styled.button`
  min-width: 7em;
  font-size: 0.8em;
  font-weight: 500;
  border: none;
  box-shadow: 0px 4px 4px ${colors.shadow};
  color: ${colors.lightFont};
  background: ${colors.submitButtonBg};
  border-radius: 3px;
  padding: 5px 20px;
  transition: 0.2s background-color;

  &:hover {
    background-color: ${colors.confirmButtonHoverBg};
  }

  ${adaptive.maxWidth.mobile} {
    font-size: 0;
    width: 20px;
    height: 20px;
    padding: 5px;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 15px;
  }
`;

export const ClearButton = styled(SearchButton)`
  background: ${colors.errorBg};

  &:hover {
    background-color: ${colors.deleteButtonHoverBg};
  }

  ${adaptive.maxWidth.mobile} {
    background-image: url(${clearIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 18px;
  }
`;

export const UserSelect = styled.select`
  width: 10em;
  font-size: 0.8em;
  background-color: ${colors.inputBg};
  border: 2px solid ${colors.inputBorder};
  border-radius: 3px;
  padding: 0 5px;

  :focus {
    outline: none;
    border: 2px solid ${colors.secondaryBg};
  }

  ${adaptive.maxWidth.mobile} {
    width: 6.7em;
  }
`;

export const OptionUserSelect = styled.option`
  font-size: 0.8em;
  opacity: 0.8;
  padding: 2px;

  ${adaptive.maxWidth.mobile} {
    width: 5em;
  }
`;
