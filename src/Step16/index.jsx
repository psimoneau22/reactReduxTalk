import React, { useState } from "react";
import produce from 'immer';
import List from "./List";

export default function Step16() {
    console.log('Root', Date.now())

    const [state, setValue] = useState([
        { key: 'Child 1', value: 0 },
        { key: 'Child 2', value: 0 },
        { key: 'Child 3', value: 0 },
        { key: 'Child 4', value: 0 },
        { key: 'Child 5', value: 0 },
    ])

    const handleChangeChild = key => () => setValue(state => {
        return updateArray(state, key)
        // return updateArrayBadMutation_ArrayRefNotUpdated(state, key)
        // return updateArrayBadMutation_ItemRefNotUpdated(state, key)
        // return updateArray_Immer(state, key)
    })

    return (
        <div>
            <div>Root:</div>
            { state.map((item, index) => (
                <button key={item.key} onClick={handleChangeChild(item.key)}>Change {item.key}</button>
            ))}

            <List items={state} />
        </div>
    )
}

function updateArray(array, key) {
    return array.map(item => {
        if (item.key !== key) return item;

        return { ...item, value: Date.now() };
    })
}

function updateArrayBadMutation_ArrayRefNotUpdated(array, key) {
    const itemToUpdate = array.find(item => item.key === key);
    itemToUpdate.value = Date.now();

    return array;
}

function updateArrayBadMutation_ItemRefNotUpdated(array, key) {
    return array.map(item => {
        if (item.key !== key) return item;

        item.value = Date.now();
        return item;
    })
}

function updateArray_Immer(array, key) {
    return produce(array, state => {
        const itemToUpdate = state.find(item => item.key === key);
        itemToUpdate.value = Date.now();
    })
}