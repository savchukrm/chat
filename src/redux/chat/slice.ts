import { createSlice } from '@reduxjs/toolkit';

interface Chat {
  topic: string;
  category: string;
  language: string;
}

interface ChatState {
  chats: Chat[];
}

const initialState: ChatState = {
  chats: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    createChat: (state, action) => {
      state.chats.push(action.payload);
    },
  },
});

export const { createChat } = chatSlice.actions;

export default chatSlice.reducer;
