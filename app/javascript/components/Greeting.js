import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {getMessages} from "../redux/messages/messagesSlice";

export function Greeting() {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages.messages);
    const status = useSelector(state => state.messages.status);

    return (
        <div>
            <h1>Random Messages</h1>
            {status === 'succeeded' && messages.map(message => <div key={message.id} style={{color: 'red', padding: '20px'}}>{message.message}</div>)}
            <button onClick={() => dispatch(getMessages())}>Get Messages</button>
        </div>
    )
}