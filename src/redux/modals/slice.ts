import { createSlice } from '@reduxjs/toolkit';

type ModalsItem = {
  welcomeModal: boolean;
  createChatModal: boolean;
};

const initialStates: ModalsItem = {
  welcomeModal: true,
  createChatModal: false,
};

const modals = createSlice({
  name: 'modals',
  initialState: initialStates,
  reducers: {
    closeWelcome(state) {
      state.welcomeModal = false;
    },
    openCreateChatModal(state) {
      state.createChatModal = true;
    },
    closeCreateChatModal(state) {
      state.createChatModal = false;
    },
  },
});

export const { closeWelcome, openCreateChatModal, closeCreateChatModal } =
  modals.actions;

export default modals.reducer;
