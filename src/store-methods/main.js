/// <reference path="../../typings/tsd.d.ts" />
var createStore = Redux.createStore;
var counter = function (state, action) {
    if (state === void 0) { state = 0; }
    if (action === void 0) { action = { type: 'INCREMENT' }; }
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};
var createStore = Redux.createStore;
var store = createStore(counter);
var renderState = function () {
    document.body.innerText = store.getState();
};
renderState();
store.subscribe(renderState);
document.addEventListener('click', function () {
    store.dispatch({ type: 'INCREMENT' });
});
//# sourceMappingURL=main.js.map