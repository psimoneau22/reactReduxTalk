import React from "react";

export default function Child({ name, value }) {
    console.log(name, Date.now())

    return (
        <div>
            <div>{name}:</div>
            <pre>{JSON.stringify(value, null, 4)}</pre>
        </div>
    )
};
