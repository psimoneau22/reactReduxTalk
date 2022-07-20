import React, { useState } from "react";
import Child from "./Child";

export default function Step13() {
    console.log('Root', Date.now())

    const [state, setValue] = useState([
        { key: 'Child 1', value: 0 },
        { key: 'Child 2', value: 0 },
        { key: 'Child 3', value: 0 },
        { key: 'Child 4', value: 0 },
        { key: 'Child 5', value: 0 },
    ])

    const handleChangeChild = index => () => setValue(state => {
        return [
            ...state.slice(0, index),
            {
                ...state[index],
                value: Date.now(),
            },
            ...state.slice(index + 1),
        ]
    })

    return (
        <div>
            <div>Root:</div>
            <button onClick={handleChangeChild(0)}>Change Child 1</button>
            <button onClick={handleChangeChild(1)}>Change Child 2</button>
            <button onClick={handleChangeChild(2)}>Change Child 3</button>
            <button onClick={handleChangeChild(3)}>Change Child 4</button>
            <button onClick={handleChangeChild(4)}>Change Child 5</button>

            { state.map(item => (
                <Child key={item.key} value={item.value} name={item.key} />
            ))}
        </div>
    )
}