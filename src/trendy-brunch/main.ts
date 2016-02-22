///<reference path='./typings/tsd.d.ts'/>

//region Imports
import * as angular from 'angular';
import ngRedux from 'ng-redux';
//import thunkMiddleware = require('redux-thunk');
import {INgReduxProvider} from 'ng-redux';
import createLogger from 'redux-logger';

import rootReducer from './reducers';

//endregion

const logger = createLogger({
    level: 'info',
    collapsed: true
});

angular
    .module('app', [ngRedux])
    .config(['$ngReduxProvider', ($ngReduxProvider: INgReduxProvider) => {
        $ngReduxProvider.createStoreWith(rootReducer, [logger])}]
    )
    .run(() => {
        console.log('Counter app is up and running.');
    });

