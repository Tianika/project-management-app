import { Card, ImgStyles, CardTitle } from '../../pages/WelcomPage/Styles';

type PersonsCardsType = {
  link: string;
  photo: string;
  name: string;
  description: string;
  alternative: string;
};

const PersonsCards = ({ link, photo, name, description, alternative }: PersonsCardsType) => {
  return (
    <Card>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ImgStyles src={photo} alt={alternative} />
        <CardTitle>{name}</CardTitle>
        <p>{description}</p>
      </a>
    </Card>
  );
};

export default PersonsCards;
