import { createSlice } from '@reduxjs/toolkit';

type UserItem = {
  name: number | null;
  email: string | null;
  verified: boolean;
  welcomeModal: boolean;
};

const initialStates: UserItem = {
  name: null,
  email: null,
  verified: false,
  welcomeModal: true,
};

const user = createSlice({
  name: 'user',
  initialState: initialStates,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    setVerified(state, action) {
      state.verified = action.payload;
    },
    removeUser(state) {
      state.name = null;
      state.email = null;
    },
    closeWelcome(state) {
      state.welcomeModal = false;
    },
  },
});

export const { setUser, removeUser, setVerified, closeWelcome } = user.actions;

export default user.reducer;
