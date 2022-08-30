import React, { memo } from "react";

function Child({ name, value }) {
    console.log(name, Date.now())

    return (
        <div>
            <div>{name}: {value.prop1}</div>
            <pre>{JSON.stringify(value, null, 4)}</pre>
        </div>
    )
};

export default memo(Child)

