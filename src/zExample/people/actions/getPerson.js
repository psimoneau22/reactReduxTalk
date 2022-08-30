import { createAsyncThunk } from "@reduxjs/toolkit";

const getPerson = createAsyncThunk('people/get', async url => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
});

export default getPerson;