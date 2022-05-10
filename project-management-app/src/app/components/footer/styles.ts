import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import gitLogo from '../../../assets/svg/github.svg';
import logo from '../../../assets/svg/rs_school_js.svg';
import { adaptive } from '../../../styles/adaptive';
import { Wrapper } from '../../../styles/global';

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;
  margin: 2rem 0 0;
  background-color: ${colors.secondaryBg};
  color: ${colors.lightFont};
`;

export const FooterLink = styled.a`
  width: 70px;
  height: 50px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  object-fit: scale-down;
  background-position: center center;
  padding: 0.2rem;
  &:hover {
    transform: scale(1, 1.2);
    transition: 0.2s all;
  }
  &:active {
    transform: translateY(3px);
    transition: 0.2s all;
    color: ${colors.darkFont};
  }
`;

export const FooterLinkPersonal = styled(FooterLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-image: url(${gitLogo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left 0;
  height: 30px;
  ${adaptive.maxWidth.mobile} {
    height: 20px;
    padding: 0 1.5rem;
  }
`;

export const SectionLink = styled(Wrapper)`
  flex-direction: row;
  width: 19rem;
  justify-content: space-between;
  padding: 0;
  ${adaptive.maxWidth.mobile} {
    flex-direction: column;
    width: 8rem;
  }
`;
