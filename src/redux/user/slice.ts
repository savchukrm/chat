import { createSlice } from '@reduxjs/toolkit';

type UserItem = {
  name: string | null;
  email: string | null;
  verified: boolean;
  isLoggedIn: boolean;
};

const storedUser = localStorage.getItem('user');

const initialStates: UserItem = storedUser
  ? JSON.parse(storedUser)
  : {
      name: null,
      email: null,
      verified: false,
      isLoggedIn: false,
    };

const user = createSlice({
  name: 'user',
  initialState: initialStates,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(state));
    },
    setVerified(state, action) {
      state.verified = action.payload;
      localStorage.setItem('user', JSON.stringify(state));
    },
    removeUser(state) {
      state.name = null;
      state.email = null;
      state.verified = false;
      state.isLoggedIn = false;
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, removeUser, setVerified } = user.actions;

export default user.reducer;
