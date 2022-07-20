import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Step from "./Step";
import reducer from './reducer';

const store = configureStore({
    reducer: combineReducers({
        somePartOfTheApp: reducer,
    }),
})

export default function Step25() {
    return (
        <Provider store={store}>
            <Step />
        </Provider>
    )
}
