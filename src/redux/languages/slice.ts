import { createSlice } from '@reduxjs/toolkit';

interface Language {
  name: string;
  id: string;
  code: string;
  emoji: string;
}

interface Languages {
  languages: Language[];
}

const initialStates: Languages = {
  languages: [],
};

const languages = createSlice({
  name: 'languages',
  initialState: initialStates,
  reducers: {
    setLanguages(state, action) {
      state.languages = action.payload;
    },
  },
});

export const { setLanguages } = languages.actions;

export default languages.reducer;
