import React from "react";
import ReactDOM from "react-dom";
import store from "./Redux/store.js";
import {Provider} from "react-redux";
import App from "./App";
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    
    document.getElementById("root")
    
);
