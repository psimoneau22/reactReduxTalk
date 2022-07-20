import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
    name: 'someActionPrefix',
    initialState: {
        prop1: 0,
        prop2: Date.now(),
        loading: false,
    },
    reducers: {
        updateProp1: (state, action) => ({
            ...state,
            prop1: action.payload,
            loading: false,
        }),
        setLoading: (state, action) => ({
            ...state,
            loading: action.payload,
        })
    },
    // extraReducers: {
    //     [doSomethingAsync.pending]: (state, action) => ({
    //         ...state,
    //         loading: true,
    //     }),
    //     [doSomethingAsync.fulfilled]: (state, action) => ({
    //         ...state,
    //         loading: false,
    //     })
    // }
});

export default reducer;

export const {
    updateProp1,
    setLoading,
} = actions;