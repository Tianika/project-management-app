import { ColumnCenteredWrapper } from '../../../styles/global';
import EditForm from '../../components/EditForm/EditForm';
import MainPageHeader from '../../components/mainPageHeader/MainPageHeader';
import { MainPageContainer } from '../MainPage/styles';

const EditProfilePage = () => {
  return (
    <MainPageContainer>
      <MainPageHeader />
      <ColumnCenteredWrapper>
        <EditForm />
      </ColumnCenteredWrapper>
    </MainPageContainer>
  );
};

export default EditProfilePage;
