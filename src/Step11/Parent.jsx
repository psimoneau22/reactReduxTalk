import React, { useState } from "react";
import Child from "./Child";

export default function Parent({ value }) {
    console.log('Parent', Date.now())

    const [childValue, setChild] = useState(0);

    const handleChange = () => setChild(Date.now())

    return (
        <div>
            <div>Parent: {value}</div>
            <button onClick={handleChange}>Change Child</button>
            <Child value={childValue} />
        </div>
    )
}