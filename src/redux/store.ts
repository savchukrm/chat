import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import user from './user/slice';
import modals from './modals/slice';

export const store = configureStore({
  reducer: { user, modals },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
