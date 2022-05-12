import { SyntheticEvent, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { setModalChildren } from '../../../redux/reducers/ModalSlice';
import { ErrorMessageSelector } from '../../../redux/selectors/BoardsSelector';
import { modalStateSelector } from '../../../redux/selectors/ModalSelectors';
import { LoadingWrapper } from '../../../styles/global';
import { ModalTypes, ModalIds } from '../../../utils/constants';
import Message from '../message/Message';
import NewBoard from '../newBoard/NewBoard';
import { ModalContainer } from './styles';

const Modal = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector(ErrorMessageSelector);
  const { modalId, modalType } = useAppSelector(modalStateSelector);

  const MODALS: Record<string, JSX.Element | null> = {
    [ModalIds.empty]: null,
    [ModalIds.newBoard]: <NewBoard />,
    [ModalIds.error]: <Message message={errorMessage} />,
    [ModalIds.loading]: <LoadingWrapper />,
  };

  const modal = useMemo(() => document.createElement('div'), []);

  const modalChildren = MODALS[modalId];

  const onCloseModal = (event: SyntheticEvent) => {
    const { target } = event;

    if (target instanceof HTMLElement && target.tagName === 'SECTION') {
      dispatch(setModalChildren({ modalId: ModalIds.empty, modalType: ModalTypes.Overlay }));
    }
  };

  useEffect(() => {
    document.body.appendChild(modal);
    return () => {
      document.body.removeChild(modal);
    };
  }, []);

  const isModalOverlay = modalId && modalType === ModalTypes.Overlay;
  const isModalWindow = modalId && modalType === ModalTypes.Window;

  return (
    <>
      {isModalOverlay && createPortal(<ModalContainer>{modalChildren}</ModalContainer>, modal)}
      {isModalWindow &&
        createPortal(
          <ModalContainer onClick={onCloseModal}>{modalChildren}</ModalContainer>,
          modal
        )}
    </>
  );
};

export default Modal;
