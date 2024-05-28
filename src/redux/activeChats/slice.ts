import { createSlice, nanoid } from '@reduxjs/toolkit';

interface IMessage {
  id: string;
  text: string;
}
interface IChannel {
  id: string;
}

interface IChat {
  messageList: IMessage[];
  currentChannelId: string;
  channelList: IChannel[];
}

const initialState: IChat = {
  messageList: [],
  currentChannelId: '',
  channelList: [],
};

const activeChatsSlice = createSlice({
  name: 'activeChats',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messageList = [
        ...state.messageList,
        {
          id: nanoid(),
          text: action.payload,
        },
      ];
    },
    addChannel: (state, action) => {
      state.currentChannelId = action.payload;
      state.channelList = [...state.channelList, { id: action.payload }];
    },
  },
});

export const { sendMessage, addChannel } = activeChatsSlice.actions;

export default activeChatsSlice.reducer;
