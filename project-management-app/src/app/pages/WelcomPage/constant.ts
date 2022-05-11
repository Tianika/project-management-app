import { welcomePageTranslation } from '../../../locales/welcomePageTranslation';
import photo1 from '../../../assets/jpg/Tatyana.jpg';
import photo2 from '../../../assets/jpg/Yauhen.jpg';
import photo3 from '../../../assets/jpg/Mariya.jpg';

export const RoutersMap = {
  login: '/login',
  register: '/register',
};

export const LIST = [
  {
    text: welcomePageTranslation.ru.list.list1,
  },
  {
    text: welcomePageTranslation.ru.list.list2,
  },
  {
    text: welcomePageTranslation.ru.list.list3,
  },
  {
    text: welcomePageTranslation.ru.list.list4,
  },
  {
    text: welcomePageTranslation.ru.list.list5,
  },
  {
    text: welcomePageTranslation.ru.list.list6,
  },
];

export const PERSONS = [
  {
    photo: photo1,
    alternative: welcomePageTranslation.en.cards.name1,
    link: 'https://github.com/tianika',
    name: welcomePageTranslation.ru.cards.name1,
    description: welcomePageTranslation.ru.cards.descrip1,
  },
  {
    photo: photo2,
    alternative: welcomePageTranslation.en.cards.name2,
    link: 'https://github.com/amidawolf',
    name: welcomePageTranslation.ru.cards.name2,
    description: welcomePageTranslation.ru.cards.descrip2,
  },
  {
    photo: photo3,
    alternative: welcomePageTranslation.en.cards.name3,
    link: 'https://github.com/mrsmariya',
    name: welcomePageTranslation.ru.cards.name3,
    description: welcomePageTranslation.ru.cards.descrip3,
  },
];
