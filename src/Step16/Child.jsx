import React from "react";

function Child({ name, value }) {
    console.log(name, Date.now())

    return (
        <div>{name}: {value}</div>
    )
};

export default React.memo(Child)