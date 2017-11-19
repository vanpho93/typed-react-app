import { Action } from './store';
import { Dispatch } from 'redux';

export const increaseValue = (): Action => ({ type: 'INCR' });

export const increaseAsync = () => {
    return (dispatch: Dispatch<Action>) => {
        return dispatch({ type: 'INCR' });
    };
};
