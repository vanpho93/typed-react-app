import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export interface AppState {
    value: number;
}

export interface Action {
    type: string;
}

const reducer = (state: AppState = { value: 1 }, action: Action): AppState => {
    if (action.type === 'INCR') return { ...state, value: state.value + 1 };
    return state;
};

export const store = createStore(
    reducer,
    applyMiddleware(thunk as any)
);
//  const store = createStore<AppState>(reducer, { value: 0 }, applyMiddleware(thunk as Middleware));
