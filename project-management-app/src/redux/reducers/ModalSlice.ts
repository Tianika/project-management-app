import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalIds, ModalTypes } from '../../utils/constants';

type ModalState = {
  modalId: string;
  modalType: ModalTypes;
};

const initialState: ModalState = {
  modalId: ModalIds.empty,
  modalType: ModalTypes.Window,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.modalId = ModalIds.empty;
    },
    setModalChildren: (state, action: PayloadAction<ModalState>) => {
      const { modalId, modalType } = action.payload;

      state.modalId = modalId;
      state.modalType = modalType;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { closeModal, setModalChildren } = modalSlice.actions;
