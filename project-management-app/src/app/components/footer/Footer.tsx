import { useTranslation } from 'react-i18next';
import { FooterLink, FooterLinkPersonal, FooterWrapper, SectionLink } from './styles';
import { Wrapper } from '../../../styles/global';

type LinksType = { href: string; name: string };

const Footer = () => {
  const { t } = useTranslation();
  const LINKS: Array<LinksType> = t('footerNames', { returnObjects: true });
  return (
    <FooterWrapper>
      <Wrapper>
        <FooterLink href="https://rs.school/react/" target="_blank" rel="noopener noreferrer" />
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
