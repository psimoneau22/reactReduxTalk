import React, { memo } from "react";
import Child from "./Child";

 function ChildContainer({ item }) {
    console.log(`ChildContainer: ${item.key}`, Date.now())

    return (
        <Child key={item.key} value={item.value} name={item.key} />
    )
};

export default memo(ChildContainer)