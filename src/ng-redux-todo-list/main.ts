/// <reference path="../../typings/tsd.d.ts" />

import Store = Redux.Store;

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface VisibilityFilter {
    filter: string;
}

interface Action {
    type: string;
    id: number;
    text?: string;
    filter?: string;
}

interface AppState {
    todos?: Todo[];
    visibilityFilter?: VisibilityFilter;
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
};

const visibilityFilter = (state: VisibilityFilter = {filter: 'SHOW_ALL'},
                          action: Action): VisibilityFilter => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return {filter: action.filter};
        default:
            return state;
    }
};

const todoApp = (state: AppState = {}, action: Action): AppState => {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    }
};

const {createStore} = Redux;
const store: Store = createStore(todoApp);

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

console.log('Dispatching SET_VISIBILITY_FILTER.');
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');