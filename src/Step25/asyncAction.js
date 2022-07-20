import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateProp1, updateProp2 } from "./reducer";

// function doSomethingAsync() {
//     return async (dispatch, getState) => {
//         dispatch(updateProp1(Date.now()))

//         const data = await fakeApiCall();

//         const p2Payload = getState().somePartOfTheApp.prop1 * 2;
//         dispatch(updateProp2(p2Payload));

//         return data;
//     }
// }



const doSomethingAsync = createAsyncThunk(
    'testAsync',
    async (payload, thunkApi) => {

        thunkApi.dispatch(updateProp1(Date.now()))

        const data = await fakeApiCall();

        const p2Payload = thunkApi.getState().somePartOfTheApp.prop1 * 2;
        thunkApi.dispatch(updateProp2(p2Payload));

        return data;
    }
)

console.log('dx', doSomethingAsync)
export default doSomethingAsync;


async function fakeApiCall() {
    const testData = {
        p1: 'v1',
        p2: 'v2',
    }

    return new Promise(resolve => {
        setTimeout(() => resolve(testData), 3000);
    })
}
