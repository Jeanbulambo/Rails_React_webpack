// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Provider} from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  configureStore from './redux/configureStore';
import {getMessages} from "./redux/messages/messagesSlice";
configureStore.dispatch(getMessages());

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={configureStore}>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
            </Routes>
        </Router>
    </Provider>
);
Footer
