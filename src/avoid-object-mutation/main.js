var toggleTodo = function (todo) {
    return Object.assign({}, todo, { completed: !todo.completed });
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
var testToggleTodo = function () {
    var todoBefore = {
        id: 0,
        text: 'Learn Redux',
        completed: false
    };
    var todoAfter = {
        id: 0,
        text: 'Learn Redux',
        completed: true
    };
    deepFreeze(todoBefore);
    expect(toggleTodo(todoBefore)).toEqual(todoAfter);
};
testToggleTodo();
console.log('All tests passed!');
//# sourceMappingURL=main.js.map