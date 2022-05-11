import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';
import { Wrapper } from '../../../styles/global';
import image from '../../../assets/jpg/3d-robot-belyy-fon.jpg';
import { adaptive } from '../../../styles/adaptive';
import { NotFoundPageTranslation } from '../../../locales/notFoundPageTranslation';

export const NotFoundPageWrapper = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: contain;
  object-fit: scale-down;
  background-position: right center;
  min-height: 100vh;
  ${adaptive.maxWidth.mobile} {
    min-height: 70vh;
  }
`;

export const Animation = keyframes`
   0%{
		clip:rect(55px,9999px,56px,0);
	}
	5%{
		clip:rect(47px,9999px,30px,0);
	}
	10%{
		clip:rect(43px,9999px,36px,0);
	}
	15%{
		clip:rect(36px,9999px,10px,0);
	}
	20%{
		clip:rect(40px,9999px,56px,0);
	}
	25%{
		clip:rect(95px,9999px,90px,0);
	}
	30%{
		clip:rect(49px,9999px,76px,0);
	}
	35%{
		clip:rect(51px,9999px,36px,0);
	}
	40%{
		clip:rect(61px,9999px,72px,0);
	}
	45%{
		clip:rect(11px,9999px,82px,0);
	}
	50%{
		clip:rect(30px,9999px,76px,0);
	}
	55%{
		clip:rect(41px,9999px,89px,0);
	}
	60%{
		clip:rect(34px,9999px,67px,0);
	}
	65%{
		clip:rect(13px,9999px,98px,0);
	}
	70%{
		clip:rect(24px,9999px,87px,0);
	}
	75%{
		clip:rect(35px,9999px,77px,0);
	}
	80%{
		clip:rect(46px,9999px,62px,0);
	}
	85%{
		clip:rect(49px,9999px,97px,0);
	}
	90%{
		clip:rect(37px,9999px,82px,0);
	}
	95%{
		clip:rect(24px,9999px,71px,0);
	}
	100%{
		clip:rect(12px,9999px,60px,0);
	}
`;

export const NotFoundPageTitle = styled.h1`
  position: relative;
  top: 1rem;
  margin: 0 0 1rem;
  color: ${colors.secondaryBg};
  font-size: 5rem;
  text-align: center;
  text-transform: uppercase;
  ${adaptive.maxWidth.mobile} {
    font-size: 3rem;
  }
  &::before,
  &::after {
    content: '${NotFoundPageTranslation.ru.title}';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background-color: ${colors.lightFont};
    color: ${colors.secondaryBg};
  }
  &::before {
    left: 8px;
    text-shadow: 2px 0 ${colors.headerBg};
    animation: ${Animation} 2s infinite linear;
  }
  &::after {
    left: 4px;
    text-shadow: -2px 0 ${colors.headerBg};
    animation: ${Animation} 2s infinite linear;
  }
`;

export const NotFoundPageLink = styled(NavLink)`
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  text-shadow: -2px 2px ${colors.lightFont};
  color: ${colors.secondaryBg};
  ${adaptive.maxWidth.mobile} {
    font-size: 1.5rem;
  }
  &:hover {
    transform: scale(1, 1.5);
    transition: 0.2s all;
  }
  &:active {
    transform: translateY(3px);
    transition: 0.2s all;
    color: ${colors.headerBg};
  }
`;

export const WrapperLink = styled(Wrapper)`
  justify-content: center;
`;
