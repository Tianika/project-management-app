import { useTranslation } from 'react-i18next';
import WelcomePageHeader from '../../components/welcomePageHeader/WelcomePageHeader';
import { Container, NewWrapper, Section, Subtitle, Title } from './styles';
import PersonsCards from '../../components/personsCards/PersonsCards';

type ListType = { text: string };
type PersonsType = {
  photo: string;
  link: string;
  name: string;
  description: string;
  alternative: string;
};

const WelcomePage = () => {
  const { t } = useTranslation();
  const LIST: Array<ListType> = t('list', { returnObjects: true });
  const PERSONS: Array<PersonsType> = t('persons', { returnObjects: true });

  return (
    <>
      <WelcomePageHeader />
      <Section>
        <Title>{t('title')}</Title>
        <Subtitle>Project Management App</Subtitle>
        <p>-{t('description')}</p>
      </Section>
      <Section>
        <Subtitle>{t('captions.caption1')}:</Subtitle>
        <ul>
          {LIST.map(({ text }) => {
            return <li key={text}>{text}</li>;
          })}
        </ul>
      </Section>
      <Container>
        <Subtitle>{t('captions.caption2')}</Subtitle>
        <NewWrapper>
          {PERSONS.map(({ photo, link, name, description, alternative }) => {
            return (
              <PersonsCards
                key={name}
                link={link}
                photo={photo}
                name={name}
                description={description}
                alternative={alternative}
              />
            );
          })}
        </NewWrapper>
      </Container>
    </>
  );
};

export default WelcomePage;
