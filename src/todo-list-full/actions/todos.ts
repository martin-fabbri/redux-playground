import * as lodash from 'lodash';
import {createAction} from 'redux-actions';
import {Todo} from './../models/todos';
import * as types from './../constants/action-types';

export const addTodo = createAction<Todo>(
    types.ADD_TODO,
    (text: string): Todo => ({text, completed: false})
);

export const toggleTodo = createAction<Todo>(
    types.TOGGLE_TODO,
    (todo: Todo): Todo => <Todo>lodash.assign(todo, {completed: !todo.completed})
);
