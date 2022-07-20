import { UPDATE_PROP1, UPDATE_PROP2 } from "./actionTypes";

export const initialState = {
    prop1: 0,
    prop2: 0,
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
    }
}
