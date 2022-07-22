import { createSlice } from "@reduxjs/toolkit";
import { getFilms, getFilm } from "./actions";
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
    name: 'films',
    initialState,
    reducers: {
        filmSelected: (state, { payload }) => ({
            ...state,
            selectedDetail: payload,
        }),
    },
    extraReducers: {
        [changeTab]: () => initialState,
        [getFilms.pending]: state => ({
            ...state,
            list: {
                ...initialState.list,
                loading: true,
            },
        }),
        [getFilms.fulfilled]: (state, { payload: { data, previous, next } }) => ({
            ...state,
            list: {
                ...state.list,
                loading: false,
                data,
                previous,
                next,
            },
        }),
        [getFilms.rejected]: (state, { error }) => ({
            ...state,
            list: {
                ...state.list,
                loading: false,
                error,
            },
        }),
        [getFilm.pending]: state => ({
            ...state,
            detail: {
                ...initialState.detail,
                loading: true,
            },
        }),
        [getFilm.fulfilled]: (state, { payload: data }) => ({
            ...state,
            detail: {
                ...state.detail,
                loading: false,
                data,
            },
        }),
        [getFilm.rejected]: (state, { error }) => ({
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
    filmSelected,
} = actions