///<reference path='./typings/tsd.d.ts'/>

import * as angular from 'angular';
import ngRedux from 'ng-redux';
//import thunkMiddleware = require('redux-thunk');
//import {INgReduxProvider} from 'ng-redux';
import todosForm from './components/todos-form';
//import rootReducer from './reducers';

angular.module('counter', [ngRedux])
    //.config(['$ngReduxProvider', ($ngReduxProvider: INgReduxProvider) => {
    //    $ngReduxProvider.createStoreWith(rootReducer, [thunkMiddleware])
    //}])
    .directive('todosForm', todosForm)
    .run(() => {
        console.log('Todos app is up and running.');
    });

