/// <reference path="../../typings/tsd.d.ts" />

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const toggleTodo = (todo: Todo): Todo => {
    //todo.completed = !todo.completed;
    //return todo;

    return Object.assign(
        {},
        todo,
        {completed: !todo.completed}
    );
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

const testToggleTodo = () => {
    const todoBefore: Todo = {
        id: 0,
        text: 'Learn Redux',
        completed: false
    };

    const todoAfter: Todo = {
        id: 0,
        text: 'Learn Redux',
        completed: true
    };

    deepFreeze(todoBefore);

    expect(
       toggleTodo(todoBefore)
    ).toEqual(todoAfter);
}

testToggleTodo();

console.log('All tests passed!');