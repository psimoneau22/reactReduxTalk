import { createAsyncThunk } from "@reduxjs/toolkit";

const getFilms = createAsyncThunk('films/get', async id => {
    const response = await fetch(`https://swapi.dev/api/films/${id}`);
    const data = await response.json();

    return data;
});

export default getFilms;