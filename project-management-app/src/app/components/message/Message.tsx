import { useAppSelector } from '../../../redux/hooks/reduxHooks';
import { errorMessageSelector as boardsError } from '../../../redux/selectors/BoardsSelector';
import { errorMessageSelector as boardError } from '../../../redux/selectors/BoardSelectors';
import { MessageContainer } from './styles';

const Message = () => {
  const boardsErrorMessage = useAppSelector(boardsError);
  const boardErrorMessage = useAppSelector(boardError);

  return <MessageContainer>{boardsErrorMessage || boardErrorMessage}</MessageContainer>;
};

export default Message;
