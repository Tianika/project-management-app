import { welcomePageTranslation } from '../../../locales/welcomePageTranslation';
import photo from './accets/Tatyana.jpg';
import photo2 from './accets/Yauhen.jpg';
import photo3 from './accets/Mariya.jpg';

export const RoutersMap = {
  login: '/login',
  register: '/register',
};

export const list = [
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

export const persons = [
  {
    photo: photo,
    link: 'https://github.com/tianika',
    name: welcomePageTranslation.ru.cards.name1,
    description: welcomePageTranslation.ru.cards.descrip1,
  },
  {
    photo: photo2,
    link: 'https://github.com/amidawolf',
    name: welcomePageTranslation.ru.cards.name2,
    description: welcomePageTranslation.ru.cards.descrip2,
  },
  {
    photo: photo3,
    link: 'https://github.com/mrsmariya',
    name: welcomePageTranslation.ru.cards.name3,
    description: welcomePageTranslation.ru.cards.descrip3,
  },
];
