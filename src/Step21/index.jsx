import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    some: {
        deeply: {
            nested: {
                value: 0
            },
        },
    },
};

export default function Step21() {

    const v1 = reducer(initialState, { type: 'one'});
    const v2 = reducer(v1, { type: 'two'});
    const v3 = reducer(v2, { type: 'custom', payload: 56 });

    console.log('initialState', initialState);
    console.log('v1', v1);
    console.log('v2', v2);
    console.log('v3', v3);

    return null;
}

// export default function Step21() {

//     const store = configureStore({
//         reducer,
//         preloadedState: initialState
//     });

//     store.subscribe(() => console.log(store.getState()))

//     store.dispatch({ type: 'one'});
//     store.dispatch({ type: 'two'});
//     store.dispatch({ type: 'custom', payload: 56 });

//     return null;
// }

function reducerBasic(state, action) {
    switch (action.type) {
        case 'one':
            return { ...state, value: 11};
        case 'two':
            return { ...state, value: 22};
        default:
            return state;
    }
}

function reducer(state, action) {
    switch (action.type) {
        case 'one':
            return { ...state, value: 11};
        case 'two':
            return { ...state, value: 22};
        case 'custom':
            return {
                ...state,
                some: {
                    ...state.some,
                    deeply: {
                        ...state.deeply,
                        nested: {
                            ...state.nested,
                            value: action.payload
                        }
                    }
                }
            };
        default:
            return state;
    }
}