import React, { useState } from "react";
import Child from "./Child";

export default function Step14() {
    console.log('Root', Date.now())

    const [value, setValue] = useState(0);
    const [unused, setUnused] = useState(0);

    const handleChangeValue = () => setValue(Date.now());
    const handleChangeUnused = () => setUnused(Date.now());

    const complexValue = calculateComplexValue();

    return (
        <div>
            <div>Root:</div>
            <button onClick={handleChangeValue}>Change Child</button>
            <button onClick={handleChangeUnused}>Change Unused</button>

            <Child value={value} name="Child" complexValue={complexValue}/>
        </div>
    )
}

function calculateComplexValue() {
    return {
        prop1: Date.now()
    }
}

// { useMemo }
// const complexValue = useMemo(calculateComplexValue, [value]);
