import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FunctionIds, ModalIds, ModalTypes } from '../../utils/constants';

type ModalState = {
  modalId: ModalIds;
  modalType: ModalTypes;
  functionId?: FunctionIds;
};

const initialState: ModalState = {
  modalId: ModalIds.empty,
  modalType: ModalTypes.Window,
  functionId: FunctionIds.empty,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.modalId = ModalIds.empty;
    },
    setModalChildren: (state, action: PayloadAction<ModalState>) => {
      const { modalId, modalType, functionId } = action.payload;

      state.modalId = modalId;
      state.modalType = modalType;
      state.functionId = functionId;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { closeModal, setModalChildren } = modalSlice.actions;
