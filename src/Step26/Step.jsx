import React from "react";
import { useDispatch, useSelector } from "react-redux";
import doSomethingAsync from "./asyncAction";

export default function Step() {
    console.log('Root', Date.now())

    const dispatch = useDispatch();
    const value = useSelector(state => state.somePartOfTheApp);

    const handleChange = () => dispatch(doSomethingAsync())

    return (
        <div>
            <div>Root:</div>
            <button onClick={handleChange}>Update Async</button>
            <pre>{JSON.stringify(value, null, 4)}</pre>
        </div>
    )
}
