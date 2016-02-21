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
var testAddTodo = function () {
    var stateBefore = [];
    var action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    };
    var stateAfter = [
        {
            id: action.id,
            text: action.text,
            completed: false
        }
    ];
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(todos(stateBefore, action)).toEqual(stateAfter);
};
var testToggleTodo = function () {
    var stateBefore = [
        {
            id: 0,
            text: 'Todo #0',
            completed: false
        },
        {
            id: 1,
            text: 'Todo #1',
            completed: false
        }
    ];
    var action = {
        type: 'TOGGLE_TODO',
        id: 1
    };
    var stateAfter = [
        {
            id: 0,
            text: 'Todo #0',
            completed: false
        },
        {
            id: 1,
            text: 'Todo #1',
            completed: true
        }
    ];
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(todos(stateBefore, action)).toEqual(stateAfter);
};
testAddTodo();
testToggleTodo();
console.log('All tests passed!');
//# sourceMappingURL=main.js.map