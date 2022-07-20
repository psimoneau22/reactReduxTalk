import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
    name: 'someActionPrefix',
    initialState: {
        prop1: 0,
        prop2: 0,
    },
    reducers: {
        updateProp1: (state, action) => ({
            ...state,
            prop1: action.payload
        }),
        updateProp2: (state, action) => ({
            ...state,
            prop2: action.payload
        })
    }
});

export default reducer;

export const {
    updateProp1,
    updateProp2,
} = actions;