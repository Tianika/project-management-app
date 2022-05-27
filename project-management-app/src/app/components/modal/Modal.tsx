import { SyntheticEvent, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { closeModal } from '../../../redux/reducers/ModalSlice';
import { modalStateSelector } from '../../../redux/selectors/ModalSelectors';
import { LoadingWrapper } from '../../../styles/global';
import { ModalTypes, ModalIds } from '../../../utils/constants';
import ConfirmationWindow from '../confirmationWindow/ConfirmationWindow';
import Message from '../message/Message';
import NewBoard from '../newBoard/NewBoard';
import NewColumn from '../newColumn/NewColumn';
import NewTask from '../newTask/NewTask';
import TaskView from '../taskView/TaskView';
import { BlurModalContainer, ModalContainer } from './styles';

const Modal = () => {
  const dispatch = useAppDispatch();
  const { modalId, modalType } = useAppSelector(modalStateSelector);

  const MODALS: Record<string, JSX.Element | null> = {
    [ModalIds.empty]: null,
    [ModalIds.newBoard]: <NewBoard />,
    [ModalIds.confirmationWindow]: <ConfirmationWindow />,
    [ModalIds.error]: <Message />,
    [ModalIds.loading]: <LoadingWrapper />,
    [ModalIds.newTask]: <NewTask />,
    [ModalIds.newColumn]: <NewColumn />,
    [ModalIds.taskView]: <TaskView />,
  };

  const modal = useMemo(() => document.createElement('div'), []);

  const modalChildren = MODALS[modalId];

  const ref = useRef(null);

  const onCloseModal = (event: SyntheticEvent) => {
    const { target } = event;

    if (ref.current === target) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    document.body.appendChild(modal);
    return () => {
      document.body.removeChild(modal);
    };
  }, [modal]);

  const isModalOverlay = modalId && modalType === ModalTypes.Overlay;
  const isModalWindow = modalId && modalType === ModalTypes.Window;

  return (
    <>
      {isModalOverlay && createPortal(<ModalContainer>{modalChildren}</ModalContainer>, modal)}
      {isModalWindow &&
        createPortal(
          <BlurModalContainer onClick={onCloseModal} ref={ref}>
            {modalChildren}
          </BlurModalContainer>,
          modal
        )}
    </>
  );
};

export default Modal;
