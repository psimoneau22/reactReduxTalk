import { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import { updateProp1, updateProp2, updateProp3 } from "./actionCreators";

export default function useDemo() {
    const [value, dispatch] = useReducer(reducer, initialState);

    return [
        value,
        {
            updateProp1: value => dispatch(updateProp1(value)),
            updateProp2: value => dispatch(updateProp2(value)),
            updateProp3: value => dispatch(updateProp3(value)),
        }
    ]
}


