///<reference path='../actions/action.d.ts'/>
///<reference path='../reducers/state.d.ts'/>

import State = counter.State;

export default (state: State = {counter: 0}, action: counter.Action): State => {
    switch (action.type) {
        default:
            return state;
    }
}