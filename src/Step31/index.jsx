import React from "react";
import Child from "./Child";
import StepChild from "./StepChild";
import withAsyncValue from "./withAsyncValue";

const ChildWithValue = withAsyncValue(Child, "https://swapi.dev/api/people/1");
const StepChildWithValue = withAsyncValue(StepChild, "https://swapi.dev/api/people/2", 3000);

export default function Step12() {
    console.log('Root', Date.now())

    return (
        <div>
            <div>Root:</div>
            <ChildWithValue name="Phil" />
            <ChildWithValue name="Dennis" />
            <StepChildWithValue />
            <StepChildWithValue />
        </div>
    )
}

