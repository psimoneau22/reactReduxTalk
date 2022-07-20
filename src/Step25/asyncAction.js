import { setLoading, updateProp1 } from "./reducer";

const doSomethingAsync = () => async (dispatch, getState) => {
    dispatch(setLoading(true));

    const response = await fetch('https://swapi.dev/api/people/1');
    const data = await response.json();

    dispatch(updateProp1({
        ...data,
        fromState: getState().somePartOfTheApp.prop2 + 1,
    }));

    return data;
}

export default doSomethingAsync;