import { createSlice } from "@reduxjs/toolkit";
import { getPeople, getPerson } from "./actions";
import { changeTab } from '../shared/reducer';

const initialState = {
    list: {
        loading: false,
        data: [],
        error: undefined,
        previous: undefined,
        next: undefined,
    },
    detail: {
        loading: false,
        data: undefined,
        error: undefined,
    },
    selectedDetail: undefined,
}

const { reducer, actions } = createSlice({
    name: 'people',
    initialState,
    reducers: {
        personSelected: (state, { payload }) => ({
            ...state,
            selectedDetail: payload,
        }),
    },
    extraReducers: {
        [changeTab]: () => initialState,
        [getPeople.pending]: state => ({
            ...state,
            list: {
                ...initialState.list,
                loading: true,
            },
        }),
        [getPeople.fulfilled]: (state, { payload: { data, previous, next } }) => ({
            ...state,
            list: {
                ...state.list,
                loading: false,
                data,
                previous,
                next,
            },
        }),
        [getPeople.rejected]: (state, { error }) => ({
            ...state,
            list: {
                ...state.list,
                loading: false,
                error,
            },
        }),
        [getPerson.pending]: state => ({
            ...state,
            detail: {
                ...initialState.detail,
                loading: true,
            },
        }),
        [getPerson.fulfilled]: (state, { payload: data }) => ({
            ...state,
            detail: {
                ...state.detail,
                loading: false,
                data,
            },
        }),
        [getPerson.rejected]: (state, { error }) => ({
            ...state,
            detail: {
                ...state.detail,
                loading: false,
                error,
            },
        }),
    }
});

export default reducer;

export const {
    personSelected,
} = actions