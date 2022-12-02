import React from 'react';
// import  configureStore from  '../redux/configureStore' ;
// import {getMessages} from "../redux/messages/messagesSlice";
import {Greeting} from "./Greeting";


function App() {
    // configureStore.dispatch(getMessages());
    return (<main>
        <h1>Rails React Playground</h1>
        <div className="container">
            <Greeting/>
        </div>
    </main>);
}

export default App;