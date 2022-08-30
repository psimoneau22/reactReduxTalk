import React, { useState, useMemo } from "react";
import Child from "./Child";

export default function Step14() {
    console.log('Root', Date.now())

    const [value, setValue] = useState(0);
    const [_, setUnused] = useState(0);

    const handleChangeValue = () => setValue(Date.now());
    const handleChangeUnused = () => setUnused(Date.now());

    const complexValue = calculateComplexValue(value);
    // const complexValue = useMemo(
    //     () => calculateComplexValue(value),
    //     [value]
    // );

    return (
        <div>
            <div>Root:</div>
            <button onClick={handleChangeValue}>Change Child</button>
            <button onClick={handleChangeUnused}>Change Unused</button>

            <Child value={complexValue} name="Child" />
        </div>
    )
}

function calculateComplexValue(value) {
    return {
        prop1: value + 1
    }
}
