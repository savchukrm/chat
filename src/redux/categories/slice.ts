import { createSlice } from '@reduxjs/toolkit';

interface Category {
  name: string;
  id: string;
}

interface Categories {
  categories: Category[];
}

const initialStates: Categories = {
  categories: [],
};

const categories = createSlice({
  name: 'categories',
  initialState: initialStates,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categories.actions;

export default categories.reducer;
