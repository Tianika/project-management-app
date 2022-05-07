import { MessageContainer } from './styles';

type MessageType = {
  message: string;
};

const Message = ({ message }: MessageType) => {
  return <MessageContainer>{message}</MessageContainer>;
};

export default Message;
