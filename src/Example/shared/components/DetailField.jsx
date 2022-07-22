import React from "react";

export default function DetailFields({ name, value }) {
    return (
        <li key={name}>{name}: {value}</li>
    )
}