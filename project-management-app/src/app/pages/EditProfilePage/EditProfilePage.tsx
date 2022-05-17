import { ColumnCenteredWrapper } from '../../../styles/global';
import EditForm from '../../components/EditForm/EditForm';
import Header from '../../components/header/Header';
import { MainPageContainer } from '../MainPage/styles';

const EditProfilePage = () => {
  return (
    <MainPageContainer>
      <Header />
      <ColumnCenteredWrapper>
        <EditForm />
      </ColumnCenteredWrapper>
    </MainPageContainer>
  );
};

export default EditProfilePage;
