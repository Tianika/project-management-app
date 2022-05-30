import { useTranslation } from 'react-i18next';
import { RoutersMap } from '../../../utils/constants';
import { NotFoundPageLink, NotFoundPageTitle, NotFoundPageWrapper, WrapperLink } from './styles';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <NotFoundPageWrapper>
      <NotFoundPageTitle>{t('notFoundPageTranslation.title')}</NotFoundPageTitle>
      <WrapperLink>
        <NotFoundPageLink to={RoutersMap.main}>
          {t('notFoundPageTranslation.linkTitle')}
        </NotFoundPageLink>
      </WrapperLink>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
