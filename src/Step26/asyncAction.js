import { createAsyncThunk } from "@reduxjs/toolkit";

const doSomethingAsync = createAsyncThunk('asyncActionName/example', async (payload, thunkAApi) => {
    const response = await fetch('https://swapi.dev/api/people/1');
    const data = await response.json();

    return data;
});

export default doSomethingAsync;