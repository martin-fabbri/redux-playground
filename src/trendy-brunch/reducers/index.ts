//region Imports
import {combineReducers, Reducer} from 'redux';
import lineup from './lineup';
//endregion

const rootReducer: Reducer = combineReducers({
    lineup
});

export default rootReducer;
