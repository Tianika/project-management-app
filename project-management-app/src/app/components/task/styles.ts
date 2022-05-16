import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import deleteIcon from '../../../assets/svg/delete.svg';
import editIcon from '../../../assets/svg/edit.svg';

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
  word-wrap: break-word;
`;

export const TaskButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TaskButton = styled.button`
  height: 30px;
  width: 40px;
  background-color: ${colors.baseBg};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px 30px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  transition: background-color 0.2s;
`;

export const EditButton = styled(TaskButton)`
  background-image: url(${editIcon});

  &:hover {
    background-color: ${colors.submitButtonHoverBg};
  }
`;

export const DeleteButton = styled(TaskButton)`
  background-image: url(${deleteIcon});

  &:hover {
    background-color: ${colors.deleteButtonHoverBg};
  }
`;
