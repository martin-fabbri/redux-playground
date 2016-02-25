import {createAction} from 'redux-actions';
import {Todo} from './../models/todos';
import * as types from './../constants/action-types';


export const addTodo = createAction<Todo>(
    types.ADD_TODO,
    (text: string) => ({text, completed: false})
);

