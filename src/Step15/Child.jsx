import React, { memo } from "react";

function Child({ name, value, onChangeChild, onChangeUnused }) {
    console.log(name, Date.now())

    return (
        <div>
            <div>{name}: {value}</div>
            <button onClick={onChangeChild}>Change Child</button>
            <button onClick={onChangeUnused}>Change Unused</button>
        </div>
    )
};

export default memo(Child);