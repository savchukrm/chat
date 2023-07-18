import { createSlice } from '@reduxjs/toolkit';

type SizeScreen = {
  isExpanded: boolean;
};

const initialStates: SizeScreen = {
  isExpanded: true,
};

const size = createSlice({
  name: 'size',
  initialState: initialStates,
  reducers: {
    setIsExpanded(state, action) {
      state.isExpanded = action.payload;
    },
  },
});

export const { setIsExpanded } = size.actions;

export default size.reducer;
