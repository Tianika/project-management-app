import { ColumnCenteredWrapper } from '../../../styles/global';
import EditProfileForm from '../../components/editProfileForm/EditProfileForm';
import MainPageHeader from '../../components/mainPageHeader/MainPageHeader';
import { MainPageContainer } from '../MainPage/styles';

const EditProfilePage = () => {
  return (
    <MainPageContainer>
      <MainPageHeader />
      <ColumnCenteredWrapper>
        <EditProfileForm />
      </ColumnCenteredWrapper>
    </MainPageContainer>
  );
};

export default EditProfilePage;
