import React, { useState } from "react";
import Child from "./Child";

export default function Step13() {
    console.log('Root', Date.now())

    const [child3Value, setChild3] = useState(0)
    const [child6Value, setChild6] = useState(0)

    const handleChangeChild3 = () => setChild3(Date.now())
    const handleChangeChild6 = () => setChild6(Date.now())

    return (
        <div>
            <div>Root:</div>
            <button onClick={handleChangeChild3}>Change Child 3</button>
            <button onClick={handleChangeChild6}>Change Child 6</button>

            <Child value="static value" name="Child 1"/>
            <Child value="static value" name="Child 2"/>
            <Child value={child3Value} name="Child 3"/>
            <Child value="static value" name="Child 4"/>
            <Child value="static value" name="Child 5"/>
            <Child value={child6Value} name="Child 6"/>
            <Child value="static value" name="Child 7"/>
            <Child value="static value" name="Child 8"/>
        </div>
    )
}