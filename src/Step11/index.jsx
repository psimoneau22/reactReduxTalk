import React, { useState } from "react";
import GrandParent from "./GrandParent";

export default function Step11() {
    console.log('Root', Date.now())

    const [childValue, setChildValue] = useState(0);

    const handleChange = () => setChildValue(Date.now())

    return (
        <div>
            <div>Root:</div>
            <button onClick={handleChange}>Change GrandParent</button>
            <GrandParent value={childValue} />
        </div>
    )
}