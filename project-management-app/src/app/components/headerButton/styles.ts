import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const HeaderButtonStyled = styled.button`
  font-size: 20px;
  font-weight: 500;
  height: 40px;
  min-width: 150px;
  background-color: ${colors.buttonBg};
  color: ${colors.lightFont};
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  margin: 0 10px;
  box-shadow: 0px 4px 4px ${colors.shadow};
  transition: 300ms ease-in background-color;

  &:hover {
    background-color: ${colors.buttonHoverBg};
  }
`;
