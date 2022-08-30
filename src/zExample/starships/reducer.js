import { createSlice } from "@reduxjs/toolkit";

const initialState = {
}

const { reducer, actions } = createSlice({
    name: 'starships',
    initialState,
    reducers: {
        test: (state, action) => {
            return state;
        }
    },
    extraReducers: {

    }
});

export default reducer;

export const {
    test,
} = actions