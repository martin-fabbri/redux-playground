import {handleActions, Action} from 'redux-actions';

import {Todo} from './../models/todos'

import {
    ADD_TODO,
    TOGGLE_TODO
} from './../constants/action-types';

const initialState: Todo[] = [
    {
        text: 'Use Redux with Typescript',
        completed: false,
        id: 0
    }
];

export default handleActions<Todo[]>({
    [ADD_TODO]: (state: Todo[], action: Action): Todo[] => {
        return [
            ...state,
            {
                id: state.reduce<number>((maxId: number, todo: Todo) =>
                    Math.max(todo.id, maxId) + 1
                , -1),
                completed: action.payload.completed,
                text: action.payload.text
            }
        ];
    },
    [TOGGLE_TODO]: (state: Todo[], action: Action): Todo[] => {
        return state.map<Todo>(
            todo => (todo.id === action.payload.id)
                ? action.payload
                : todo
        );
    }
}, initialState);
