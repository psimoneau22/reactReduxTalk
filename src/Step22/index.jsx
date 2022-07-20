import React, { useReducer } from "react";

const initialState = {
    prop1: 0,
    prop2: 0,
}

export default function Step22() {
    console.log('Root', Date.now())

    const [value, dispatch] = useReducer(reducer, initialState);

    const handleChange1 = () => dispatch({ type: 'update/prop1', payload: Date.now() })
    const handleChange2 = () => dispatch({ type: 'update/prop2', payload: Date.now() })

    return (
        <div>
            <div>Root:</div>
            <button onClick={handleChange1}>Update Prop1</button>
            <button onClick={handleChange2}>Update Prop2</button>
            <pre>{JSON.stringify(value, null, 4)}</pre>
        </div>
    )
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "update/prop1":
            return {
                ...state,
                prop1: action.payload
            };
        case "update/prop2":
            return {
                ...state,
                prop2: action.payload
            };
    }

    return state;
}