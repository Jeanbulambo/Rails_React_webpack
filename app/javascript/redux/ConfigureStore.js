import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from './messages/messagesSlice';

export default configureStore({
    reducer: {
        messages: messagesReducer
    },
})