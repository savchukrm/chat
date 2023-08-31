import { createSlice } from '@reduxjs/toolkit';

interface Chat {
  authorId: string;
  name: string;
  categoryId: string;
  languageId: string;
  id: string;
  type: string;
  creationDate: string;
}

interface ChatState {
  allChats: Chat[];
}

const initialState: ChatState = {
  allChats: [],
};

const chatSlice = createSlice({
  name: 'allChats',
  initialState,
  reducers: {
    setAllChats: (state, action) => {
      state.allChats = action.payload;
    },
  },
});

export const { setAllChats } = chatSlice.actions;

export default chatSlice.reducer;
