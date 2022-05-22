import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.headerBg};
`;

export const BlurModalContainer = styled(ModalContainer)`
  backdrop-filter: blur(3px);
`;
