import { createSlice } from "@reduxjs/toolkit";
import doSomethingAsync from "./asyncAction";

const initialState = {
    prop1: 0,
    prop2: Date.now(),
    loading: false,
    errorMessage: null,
}

const { reducer } = createSlice({
    name: 'someActionPrefix',
    initialState,
    reducers: { },
    extraReducers: {
        [doSomethingAsync.pending]: (state, action) => ({
            ...initialState,
            loading: true,
        }),
        [doSomethingAsync.fulfilled]: (state, action) => ({
            ...state,
            prop1: action.payload,
        }),
        [doSomethingAsync.error]: (state, action) => ({
            ...state,
            errorMessage: error,
            loading: false,
        })
    }
});

export default reducer;