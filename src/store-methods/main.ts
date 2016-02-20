/// <reference path="../../typings/tsd.d.ts" />

import createStore = Redux.createStore;
interface Action {
    type: string
}

const counter = (state: number = 0, action: Action = {type: 'INCREMENT'}): number => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const {createStore} = Redux;

const store: Redux.Store = createStore(counter);

const renderState = () => {
    document.body.innerText = store.getState();
}

renderState();

store.subscribe(renderState);

document.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});
});


