import Header from './components/Header';
import { Container, NewWrapper, Section, Subtitle, Title } from './Styles';
import PersonsCards from './components/PersonsCards';
import { list, persons } from './constant';
import { welcomePageTranslation } from '../../../locales/welcomePageTranslation';

export const WelcomePage = () => {
  return (
    <>
      <Header />
      <Section>
        <Title>{welcomePageTranslation.ru.title}</Title>
        <Subtitle>Project management app</Subtitle>
        <p>-{welcomePageTranslation.ru.description}</p>
      </Section>
      <Section>
        <Subtitle>{welcomePageTranslation.ru.captions.caption1}:</Subtitle>
        <ul>
          {list.map(({ text }) => {
            return <li key={text}>{text}</li>;
          })}
        </ul>
      </Section>
      <Container>
        <Subtitle>{welcomePageTranslation.ru.captions.caption2}</Subtitle>
        <NewWrapper>
          {persons.map(({ photo, link, name, description, alternative }) => {
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
