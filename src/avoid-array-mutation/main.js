var addCounter = function (list) {
    return list.concat([0]);
};
var removeCounter = function (list, index) {
    return list.slice(0, index).concat(list.slice(index + 1));
};
var incrementCounter = function (list, index) {
    return list.slice(0, index).concat([
        list[index] + 1
    ], list.slice(index + 1));
};
var deepFreeze = function (o) {
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
var testAddCounter = function () {
    var listBefore = [];
    var listAfter = [0];
    deepFreeze(listBefore);
    expect(addCounter(listBefore)).toEqual(listAfter);
};
var testRemoveCounter = function () {
    var listBefore = [0, 10, 20];
    var listAfter = [0, 20];
    deepFreeze(listBefore);
    expect(removeCounter(listBefore, 1)).toEqual(listAfter);
};
var testIncrementCounter = function () {
    var listBefore = [0, 10, 20];
    var listAfter = [0, 11, 20];
    deepFreeze(listBefore);
    expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
};
testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('All tests passed!');
//# sourceMappingURL=main.js.map