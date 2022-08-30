import React, { useState, useCallback } from "react";
import Child from "./Child";

export default function Step15() {
    console.log('Root', Date.now())

    const [value, setValue] = useState(0);
    const [_, setUnused] = useState(0);

    const handleChangeValue = () => setValue(Date.now());
    const handleChangeUnused = () => setUnused(Date.now());

    // const handleChangeValue = useCallback(() => setValue(Date.now()), []);
    // const handleChangeUnused = useCallback(() => setUnused(Date.now()), []);

    return (
        <div>
            <div>Root:</div>
            <Child
                name="Child"
                value={value}
                onChangeChild={handleChangeValue}
                onChangeUnused={handleChangeUnused}
            />
        </div>
    )
}

// EQUIVALENT to usecallback
// useMemo(() => {
//     return () => setValue(Date.now());
// }, [])

// useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).