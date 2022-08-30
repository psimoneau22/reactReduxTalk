import { createAsyncThunk } from "@reduxjs/toolkit";

const getFilms = createAsyncThunk('films/getAll', async () => {
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();

    return data;
});

export default getFilms;