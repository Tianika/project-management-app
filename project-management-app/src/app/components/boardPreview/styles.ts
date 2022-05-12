import styled from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';

export const BoardPreviewStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 80vw;
  padding: 10px;
  margin-bottom: 5px;
  font-size: 24px;

  ${adaptive.maxWidth.tablet} {
    width: 85vw;
    font-size: 22px;
    padding: 7px;
  }

  ${adaptive.maxWidth.mobile} {
    width: 90vw;
    font-size: 18px;
    padding: 5px;
  }
`;

export const BoardPreviewInfo = styled.div`
  width: 90%;
  min-height: 120px;
  background-color: ${colors.baseBg};
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  margin-right: 2vw;
  box-shadow: 0px 4px 4px ${colors.shadow};
  word-wrap: word-wrap;

  ${adaptive.maxWidth.tablet} {
    min-height: 100px;
  }

  ${adaptive.maxWidth.mobile} {
    width: 85%;
    min-height: 80px;
  }
`;

export const RemoveBoardButton = styled.button`
  display: inline-block;
  width: 70px;
  min-height: 120px;
  background-color: ${colors.baseBg};
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 4px 4px ${colors.shadow};

  ${adaptive.maxWidth.tablet} {
    width: 50px;
    min-height: 100px;
  }

  ${adaptive.maxWidth.mobile} {
    width: 30px;
    min-height: 80px;
  }
`;
