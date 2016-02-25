import {combineReducers, Reducer} from 'redux';
import todos from './todos';

const rootReducer: Reducer = combineReducers({
    todos: todos
});

export default rootReducer;
