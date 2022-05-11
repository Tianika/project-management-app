import { FooterLink, FooterLinkPersonal, FooterWrapper, SectionLink } from './styles';
import { LINKS } from './footerConstants';
import { Wrapper } from '../../../styles/global';

const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <FooterLink href="https://rs.school/react/" rel="noopener noreferrer" />
      </Wrapper>
      <Wrapper>2022</Wrapper>
      <SectionLink>
        {LINKS.map(({ href, name }) => (
          <FooterLinkPersonal key={href} target="_blank" href={href}>
            {name}
          </FooterLinkPersonal>
        ))}
      </SectionLink>
    </FooterWrapper>
  );
};

export default Footer;
