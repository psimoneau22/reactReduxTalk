import React, { memo } from "react";

function Child({ name, value, complexValue }) {
    console.log(name, Date.now())

    return (
        <div>
            <div>{name}: {value}</div>
            <pre>{JSON.stringify(complexValue, null, 4)}</pre>
        </div>
    )
};

export default memo(Child)

