/// <reference path="../../typings/tsd.d.ts" />

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

expect(
    counter(0, {type: 'INCREMENT'})
).toEqual(1);

expect(
    counter(1, {type: 'INCREMENT'})
).toEqual(2);

expect(
    counter(2, {type: 'DECREMENT'})
).toEqual(1, 'DECREMENT');

expect(
    counter(1, {type: 'DECREMENT'})
).toEqual(0);

expect(
    counter(1, {type: 'SOMETHING_ELSE'})
).toEqual(1);

expect(
    counter(undefined, {type: 'INCREMENT'})
).toEqual(1);

expect(
    counter(undefined, {type: 'SOMETHING_ELSE'})
).toEqual(0);

expect(
    counter(null, {type: 'INCREMENT'})
).toEqual(1);

expect(
    counter()
).toEqual(1);

console.log('All tests passed!');

