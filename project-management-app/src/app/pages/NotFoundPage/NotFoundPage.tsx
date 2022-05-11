import { NotFoundPageTranslation } from '../../../locales/notFoundPageTranslation';
import { NotFoundPageLink, NotFoundPageTitle, NotFoundPageWrapper, WrapperLink } from './styles';

const RoutersMap = {
  main: '/main',
};

const NotFoundPage = () => {
  return (
    <NotFoundPageWrapper>
      <NotFoundPageTitle>{NotFoundPageTranslation.ru.title}</NotFoundPageTitle>
      <WrapperLink>
        <NotFoundPageLink to={RoutersMap.main}>
          {NotFoundPageTranslation.ru.linkTitle}
        </NotFoundPageLink>
      </WrapperLink>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
