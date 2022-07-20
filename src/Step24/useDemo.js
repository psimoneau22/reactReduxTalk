import { useDispatch, useSelector } from "react-redux";
import { updateProp1, updateProp2 } from "./reducer";

export default function useDemo() {
    const dispatch = useDispatch();
    const value = useSelector(state => state.somePartOfTheApp);

    return [
        value,
        {
            updateProp1: value => dispatch(updateProp1(value)),
            updateProp2: value => dispatch(updateProp2(value)),
        }
    ]
}


