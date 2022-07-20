import React from "react";

export default function StepChild({ value }) {
    console.log("StepChild", Date.now())

    return (
        <div>
            <div>Who Cares:</div>
            <pre>{JSON.stringify(value, null, 4)}</pre>
        </div>
    )
};
