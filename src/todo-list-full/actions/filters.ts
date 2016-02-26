import {createAction} from 'redux-actions';
import * as types from './../constants/action-types';
import {SHOW_ALL} from './../constants/todos-filters';

export const setVisibilityFilter = createAction<string>(
    types.SET_VISIBILITY_FILTER,
    (filter: string = SHOW_ALL): string => filter
);

