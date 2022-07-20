import { UPDATE_PROP1, UPDATE_PROP2, UPDATE_PROP3 } from "./actionTypes";

export const initialState = {
    prop1: 0,
    prop2: 0,
    prop3: 0,
}

export default function reducer(state, action) {
    switch(action.type) {
        case UPDATE_PROP1:
            return {
                ...state,
                prop1: action.payload
            };
        case UPDATE_PROP2:
            return {
                ...state,
                prop2: action.payload
            };
        // case UPDATE_PROP3:
        //     return {
        //         ...state,
        //         prop3: prop3Reducer(state.prop3, action)
        //     };
    }

    return state;
}


// function prop3Reducer(state, action) {
//     return {
//         ...state,
//         something: action.payload
//     };
// }