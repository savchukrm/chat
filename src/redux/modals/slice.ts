import { createSlice } from '@reduxjs/toolkit';

type ModalsItem = {
  welcomeModal: boolean;
  createChatModal: boolean;
};

const initialStates: ModalsItem = {
  welcomeModal: false,
  createChatModal: false,
};

const modals = createSlice({
  name: 'modals',
  initialState: initialStates,
  reducers: {
    openWelcome(state) {
      state.welcomeModal = true;
    },
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

export const {
  openWelcome,
  closeWelcome,
  openCreateChatModal,
  closeCreateChatModal,
} = modals.actions;

export default modals.reducer;
