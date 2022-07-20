import React, { useState } from "react";
import Child from "./Child";

export default function Step13_2() {
    console.log('Root', Date.now())

    const [state, setValue] = useState([
        { key: 'Child 1', value: 0 },
        { key: 'Child 2', value: 0 },
        { key: 'Child 3', value: 0 },
        { key: 'Child 4', value: 0 },
        { key: 'Child 5', value: 0 },
    ])

    const handleChangeChild = key => () => setValue(state => (
        state.map(item => item.key === key
            ? { ...item, value: Date.now() }
            : item
        )
    ))

    return (
        <div>
            <div>Root:</div>
            { state.map((item, index) => (
                <button key={item.key} onClick={handleChangeChild(item.key)}>Change {item.key}</button>
            ))}

            { state.map(item => (
                <Child key={item.key} value={item.value} name={item.key} />
            ))}
        </div>
    )
}
