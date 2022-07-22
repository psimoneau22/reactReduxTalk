import React from "react";
import { Provider } from "react-redux";
import Root from "./Root";
import store from './store';
import './style.css'

export default function Example() {
    return (
        <Provider store={store}>
            <Root />
        </Provider>
    )
}
