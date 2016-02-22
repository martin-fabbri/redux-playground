///<reference path='./../typings/tsd.d.ts'/>
///<reference path='./../actions/action.d.ts'/>

import Dispatch = Redux.Dispatch;
import Action = counter.Action;
import State = counter.State;
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment(): Action {
    return {
        type: INCREMENT_COUNTER
    };
}

export function decrement(): Action {
    return {
        type: DECREMENT_COUNTER
    };
}

export function incrementIfOdd() {
    return (dispatch: Dispatch, getState: any) => {
        const { counter } = getState();

        if (counter % 2 === 0) {
            return;
        }

        dispatch(increment());
    };
}

export function incrementAsyc(delay: number = 1000) {
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            dispatch(increment());
        }, delay);
    }
}
