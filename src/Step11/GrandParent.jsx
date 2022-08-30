import React, { useState } from "react";
import Parent from "./Parent";

export default function GrandParent({ value }) {
    console.log('GrandParent', Date.now())

    const [childValue, setChildValue] = useState(0);

    const handleChange = () => setChildValue(Date.now())

    return (
        <div>
            <div>GrandParent: {value}</div>
            <button onClick={handleChange}>Change Parent</button>
            <Parent value={childValue} />
        </div>
    )
}