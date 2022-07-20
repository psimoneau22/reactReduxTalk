import React from "react";
import ChildContainer from "./ChildContainer";

export default function List({ items }) {
    console.log('List', Date.now())

    return (
        <div>
            {items.map(item => (
                <ChildContainer key={item.key} item={item} />
            ))}
        </div>
    )
}
