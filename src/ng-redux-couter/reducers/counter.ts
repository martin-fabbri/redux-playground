///<reference path='../actions/action.d.ts'/>
///<reference path='../reducers/state.d.ts'/>

import State = counter.State;
import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './../actions/counter';

export default (state: number = 0, action: counter.Action): number => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        default:
            console.log('return default state ....', state);
            return state;
    }
}