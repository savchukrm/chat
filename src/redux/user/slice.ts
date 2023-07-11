import { createSlice } from '@reduxjs/toolkit';

type UserItem = {
  name: number | null;
  email: string | null;
  verified: boolean;
};

const initialStates: UserItem = {
  name: null,
  email: null,
  verified: false,
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
  },
});

export const { setUser, removeUser, setVerified } = user.actions;

export default user.reducer;
