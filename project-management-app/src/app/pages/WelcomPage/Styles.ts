import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { adaptive } from '../../../styles/adaptive';
import { colors } from '../../../styles/colors';
import { Wrapper } from '../../../styles/global';

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

export const HeaderWrapper = styled.header`
  background: ${colors.secondaryBg};
`;

export const NewWrapper = styled(Wrapper)`
  justify-content: space-evenly;
  ${adaptive.maxWidth.mobile} {
    flex-direction: column;
  }
`;

export const HeaderLink = styled(NavLink)`
  border-radius: 10px;
  margin: 1rem;
  border: none;
  color: ${colors.lightFont};
  &:hover {
    transform: scale(1, 1.5);
    transition: 0.2s all;
  }
  &:active {
    transform: translateY(3px);
    transition: 0.2s all;
    color: ${colors.darkFont};
  }
`;

export const Subtitle = styled.h2`
  color: ${colors.secondaryBg};
`;

export const Title = styled(Subtitle)`
  font-style: italic;
  text-decoration: underline;
  padding: 2rem;
`;

export const Section = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 1rem;
  max-width: 17rem;
  height: 30rem;
  object-fit: cover;
  border: 2px solid ${colors.secondaryBg};
  border-radius: 20px;
  box-shadow: 10px 5px 5px ${colors.secondaryBg};
  &:hover {
    opacity: 0.8;
    transition: 0.5s all;
  }
  &:active {
    transform: translateY(5px);
    transition: 0.5s all;
  }
`;

export const CardTitle = styled(Subtitle)`
  font-size: 1rem;
  padding: 0;
`;

export const ImgStyles = styled.img`
  border-radius: 20px;
`;
