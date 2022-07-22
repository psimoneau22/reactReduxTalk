import { createAsyncThunk } from "@reduxjs/toolkit";

const getFilms = createAsyncThunk('films/getAll', async (url = 'https://swapi.dev/api/films') => {
    const response = await fetch(url);
    const { results: data, previous, next } = await response.json();

    return {
        data,
        previous,
        next,
    };
});

export default getFilms;