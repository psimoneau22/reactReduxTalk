import { createSlice } from "@reduxjs/toolkit";
import doSomethingAsync from './asyncAction';

console.log('d', doSomethingAsync)

const { reducer, actions } = createSlice({
    name: 'someActionPrefix',
    initialState: {
        prop1: 0,
        prop2: 0,
        loading: false,
    },
    reducers: {
        updateProp1: (state, action) => ({
            ...state,
            prop1: action.payload,
        }),
        updateProp2: (state, action) => ({
            ...state,
            prop2: action.payload,
        })
    },
    extraReducers: {
        [doSomethingAsync.pending]: (state, action) => ({
            ...state,
            loading: true,
        }),
        [doSomethingAsync.fulfilled]: (state, action) => ({
            ...state,
            loading: false,
        })
    }
});

export default reducer;

export const {
    updateProp1,
    updateProp2,
} = actions;