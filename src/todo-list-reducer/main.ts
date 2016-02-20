/// <reference path="../../typings/tsd.d.ts" />

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}


interface Action {
    type: string;
    id: number;
    text?: string;
}

const todo = (state: Todo, action: Action): Todo => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }

        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign(
                {},
                state,
                {completed: !state.completed}
            );

        default:
            return state;
    }
}

const todos = (state: Todo[] = [], action: Action): Todo[] => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
            break;

        case 'TOGGLE_TODO':
            return state.map<Todo>(t => todo(t, action));

        default:
            return state;
    }
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

const testAddTodo = () => {
    const stateBefore: Todo[] = [];

    const action: Action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    };

    const stateAfter: Todo[] = [
        {
            id: action.id,
            text: action.text,
            completed: false
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
       todos(stateBefore, action)
    ).toEqual(stateAfter);
}

const testToggleTodo = () => {
    const stateBefore: Todo[] = [
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

    const action: Action = {
        type: 'TOGGLE_TODO',
        id: 1
    };

    const stateAfter: Todo[] = [
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

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
}

testAddTodo();
testToggleTodo();

console.log('All tests passed!');