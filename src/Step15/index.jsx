import React, { useState } from "react";
import Child from "./Child";

export default function Step14() {
    console.log('Root', Date.now())

    const [value, setValue] = useState(0);
    const [unused, setUnused] = useState(0);

    const handleChangeValue = () => setValue(Date.now());
    const handleChangeUnused = () => setUnused(Date.now());

    return (
        <div>
            <div>Root:</div>
            <Child value={value} name="Child" onChangeChild={handleChangeValue} onChangeUnused={handleChangeUnused} />
        </div>
    )
}

// { useCallback }
// const handleChangeValue = useCallback(() => setValue(Date.now()), []);
// const handleChangeUnused = useCallback(() => setUnused(Date.now()), []);