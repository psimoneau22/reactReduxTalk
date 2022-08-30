import { createAsyncThunk } from "@reduxjs/toolkit";

const doSomethingAsync = createAsyncThunk('asyncActionName/example', async (payload, thunkApi) => {
    const response = await fetch('https://swapi.dev/api/people/1');
    const data = await response.json();

    // throw new Error("something went wrong")

    return data;
});

export default doSomethingAsync;

