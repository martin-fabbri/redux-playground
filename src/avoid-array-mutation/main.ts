/// <reference path="../../typings/tsd.d.ts" />

interface Action {
    type: string
}

const addCounter = (list: number[]): number[] => {
    //return list.concat([0]);
    return [...list, 0];
}

const removeCounter = (list, index): number[] => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
}


const incrementCounter = (list: number[], index: number): number[] => {
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ];
}

const deepFreeze = (o) => {
    Object.freeze(o);

    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o.hasOwnProperty(prop)
            && o[prop] !== null
            && (typeof o[prop] === "object" || typeof o[prop] === "function")
            && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });

    return o;
};

const testAddCounter = () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore);

    expect(
       addCounter(listBefore)
    ).toEqual(listAfter);
}

const testRemoveCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];

    deepFreeze(listBefore);

    expect(
        removeCounter(listBefore, 1)
    ).toEqual(listAfter);
}

const testIncrementCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    deepFreeze(listBefore);

    expect(
        incrementCounter(listBefore, 1)
    ).toEqual(listAfter);
}

testAddCounter();
testRemoveCounter();
testIncrementCounter();

console.log('All tests passed!');