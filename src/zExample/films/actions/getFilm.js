import { createAsyncThunk } from "@reduxjs/toolkit";

const getFilm = createAsyncThunk('films/get', async url => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
});

export default getFilm;