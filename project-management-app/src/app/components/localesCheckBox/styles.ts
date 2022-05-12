import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const CheckBoxLabel = styled.label`
  top: 0;
  left: 0;
  width: 3rem;
  height: 1.2rem;
  border-radius: 15px;
  background: ${colors.columnBg};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    margin: 1px;
    background: ${colors.lightFont};
    box-shadow: 1px 3px 3px 1px ${colors.headerBg};
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  display: none;
  z-index: 1;
  border-radius: 15px;
  width: 3rem;
  height: 1.2rem;
  &:checked + ${CheckBoxLabel} {
    background: ${colors.buttonBg};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      margin-left: 1.8rem;
      transition: 0.2s;
    }
  }
`;

export const CheckBoxTitle = styled.span`
  color: ${colors.lightFont};
  text-transform: uppercase;
  padding: 0 0.5rem;
`;
