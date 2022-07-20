import React from "react";

const Child = ({ name, value })  => {
    console.log(name, Date.now())

    return (
        <div>{name}: {value}</div>
    )
};

export default Child