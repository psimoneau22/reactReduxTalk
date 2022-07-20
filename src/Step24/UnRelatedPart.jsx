import React from "react";
import { useSelector } from "react-redux";

export default function UnRelatedPart() {
    console.log('UnRelatedPart', Date.now())

    const value = useSelector(state => state.somePartOfTheApp.prop1);

    return (
        <div>UnrelatedPart: {value}</div>
    )
}
