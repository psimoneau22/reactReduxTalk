import React from "react";
import useDemo from "./useDemo";


export default function Step23() {
    console.log('Root', Date.now())

    const [value, { updateProp1, updateProp2, updateProp3 }] = useDemo();

    const handleChange1 = () => updateProp1(Date.now())
    const handleChange2 = () => updateProp2(Date.now())
    const handleChange3 = () => updateProp3(Date.now())

    return (
        <div>
            <div>Root:</div>
            <button onClick={handleChange1}>Update Prop1</button>
            <button onClick={handleChange2}>Update Prop2</button>
            <button onClick={handleChange3}>Update Prop3</button>
            <pre>{JSON.stringify(value, null, 4)}</pre>
        </div>
    )
}
