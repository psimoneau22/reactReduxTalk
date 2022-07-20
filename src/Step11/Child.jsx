import React from "react";

export default function Child({ value }) {
    console.log('Child', Date.now())

    return (
        <div>Child: {value}</div>
    )
}