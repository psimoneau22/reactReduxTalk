import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tab: 'people'
}

const { reducer, actions } = createSlice({
    name: 'shared',
    initialState,
    reducers: {
        changeTab: (state, { payload }) => ({
            ...state,
            tab: payload
        })
    },
});

export default reducer;

export const {
    changeTab,
} = actions