import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const baseURL = 'http://localhost:3000/api/v1/messages';


export const getMessages= createAsyncThunk('messages/getMessages', async() => {
    const response = await axios.get(baseURL);
    return response.data;

},);

const initialState = {
    messages: [],
    status: 'idle',
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getMessages.fulfilled, (state, action) => {
                state.messages = action.payload
                state.status = 'succeeded'
        })
    },
})

export default messagesSlice.reducer;