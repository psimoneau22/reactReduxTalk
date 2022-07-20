import React from "react";

export default function Child({ name, value, onChange }) {
    console.log(name, Date.now())

    return (
        <div>
            <div>Child: {value}</div>
            <button onClick={onChange}>Change</button>
        </div>
    )
}