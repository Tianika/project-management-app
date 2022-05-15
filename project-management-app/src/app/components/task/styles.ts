import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const TaskContainer = styled.div`
  background-color: ${colors.baseBg};
  padding: 10px;
  margin-right: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px ${colors.secondaryBg};
`;

export const TaskTitle = styled.h4`
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const TaskDescription = styled.p`
  font-size: 16px;
  line-height: 20px;
`;
