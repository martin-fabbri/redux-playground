import {combineReducers, Reducer} from 'redux';
import todos from './todos';
import filters from './filters';

const rootReducer: Reducer = combineReducers({
    todos: todos,
    currentFilter: filters
});

export default rootReducer;
