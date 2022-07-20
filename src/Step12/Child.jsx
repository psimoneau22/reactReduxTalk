import React from "react";

export default function Child({ name, value }) {
    console.log(name, Date.now())

    return (
        <div>{name}: {value}</div>
    )
};
