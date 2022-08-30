import { createAsyncThunk } from "@reduxjs/toolkit";

const getPeople = createAsyncThunk('people/getAll', async (url = `https://swapi.dev/api/people`) => {
    const response = await fetch(url);
    const { results: data, previous, next } = await response.json();

    return {
        data,
        previous,
        next,
    }
});

export default getPeople;