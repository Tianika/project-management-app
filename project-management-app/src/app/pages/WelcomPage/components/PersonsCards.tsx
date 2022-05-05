import { Section, Card, ImgStyles, CardTitle } from '../Styles';

type PersonsCardsType = {
  link: string;
  photo: string;
  name: string;
  description: string;
};

export const PersonsCards = ({ link, photo, name, description }: PersonsCardsType) => {
  return (
    <Section>
      <Card>
        <a href={link} target="_blank" rel="noopener norefferer noreferrer">
          <ImgStyles src={photo} alt="Tatyana Tsybina" />
          <CardTitle>{name}</CardTitle>
          <p>{description}</p>
        </a>
      </Card>
    </Section>
  );
};
