/// <reference path="../../typings/tsd.d.ts" />
var Store = Redux.Store;
var todo = function (state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, { completed: !state.completed });
        default:
            return state;
    }
};
var todos = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([
                todo(undefined, action)
            ]);
            break;
        case 'TOGGLE_TODO':
            return state.map(function (t) { return todo(t, action); });
        default:
            return state;
    }
};
var visibilityFilter = function (state, action) {
    if (state === void 0) { state = { filter: 'SHOW_ALL' }; }
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return { filter: action.filter };
        default:
            return state;
    }
};
var todoApp = function (state, action) {
    if (state === void 0) { state = {}; }
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    };
};
var createStore = Redux.createStore;
var store = createStore(todoApp);
console.log('Initial state:');
console.log(store.getState());
console.log('--------------');
console.log('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');
console.log('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Go Shopping'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');
console.log('Dispatching TOGGLE_TODO.');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 1
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');
//# sourceMappingURL=main.js.map