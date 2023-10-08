import { createSlice, nanoid } from "@reduxjs/toolkit"

interface IMessage{
id: string,
text: string
}

interface IChat{
    messageList: IMessage[],
}

const initialState: IChat = {
    messageList: [],
}

const activeChatSlice = createSlice({
    name: 'activeChat', 
    initialState,
    reducers: {

        sendMessage: (state, action)=>{
            state.messageList = [...state.messageList, {
                id: nanoid(),
                text: action.payload
            }]
        }
    }
})

export const { sendMessage } = activeChatSlice.actions;

export default activeChatSlice.reducer