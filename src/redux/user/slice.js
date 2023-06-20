import { createSlice } from '@reduxjs/toolkit';

const initialStates = {
  name: null,
  email: null,
};

const user = createSlice({
  name: 'user',
  initialState: initialStates,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    removeUser(state) {
      state.name = null;
      state.email = null;
    },
  },
});

export const { setUser, removeUser } = user.actions;

export default user.reducer;
