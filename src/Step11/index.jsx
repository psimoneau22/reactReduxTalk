import React, { useState } from "react";
import GrandParent from "./GrandParent";

export default function Step12() {
    console.log('Root', Date.now())

    const [childValue, setChild] = useState(0);

    const handleChange = () => setChild(Date.now())

    return (
        <div>
            <div>Root:</div>
            <button onClick={handleChange}>Change GrandParent</button>
            <GrandParent value={childValue} />
        </div>
    )
}