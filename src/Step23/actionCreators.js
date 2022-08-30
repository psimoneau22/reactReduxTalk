import { UPDATE_PROP1, UPDATE_PROP2,UPDATE_PROP3 } from "./actionTypes";

export function updateProp1(value) {
    return {
        type: UPDATE_PROP1,
        payload: value
    }
}

export function updateProp2(value) {
    return {
        type: UPDATE_PROP2,
        payload: value
    }
}

export function updateProp3(value) {
    return {
        type: UPDATE_PROP3,
        payload: value
    }
}

