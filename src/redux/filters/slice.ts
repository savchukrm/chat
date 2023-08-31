import { createSlice } from '@reduxjs/toolkit';

interface Filters {}

const initialState: Filters = {};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {},
    setLanguages: (state, action) => {},
    setHotOrNot: (state, action) => {},
    setUpdate: (state, action) => {},
    resetFiltres: (state, action) => {},
  },
});

export const { setUpdate, setLanguages, setHotOrNot, resetFiltres } =
  filtersSlice.actions;

export default filtersSlice.reducer;
