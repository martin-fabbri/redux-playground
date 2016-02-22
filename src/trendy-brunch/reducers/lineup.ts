///<reference path='../actions/action.d.ts'/>
///<reference path='../reducers/state.d.ts'/>

//region Imports
import {PARTY_JOINED, PARTY_LEFT} from './../actions/lineup';
import Action = tbranch.Action;
//endregion

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action: Action): any => {
    switch (action.type) {
        case PARTY_JOINED:
            return [...state, action.payload];
        case PARTY_LEFT:
            return undefined;
        default:
            return state;
    }
}