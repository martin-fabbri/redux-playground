import {handleActions, Action} from 'redux-actions';

import {
    SET_VISIBILITY_FILTER
} from './../constants/action-types';

import {
    SHOW_ALL
} from './../constants/todos-filters';

const initialState = SHOW_ALL;

export default handleActions<string>({
    [SET_VISIBILITY_FILTER]: (state: string, action: Action): string => {
        return action.payload
    }
}, initialState);
