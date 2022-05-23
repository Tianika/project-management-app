import { ColumnCenteredWrapper } from '../../../styles/global';
import EditProfileForm from '../../components/editProfileForm/EditProfileForm';
import MainPageHeader from '../../components/mainPageHeader/MainPageHeader';
import { MainPageContainer } from '../MainPage/styles';
import Footer from '../../components/footer/Footer';

const EditProfilePage = () => {
  return (
    <MainPageContainer>
      <MainPageHeader />
      <ColumnCenteredWrapper>
        <EditProfileForm />
      </ColumnCenteredWrapper>
      <Footer />
    </MainPageContainer>
  );
};

export default EditProfilePage;
