///<reference path='./typings/tsd.d.ts'/>

//region css
import '!style!css!./css/style.css';
//endregion

//region Imports
import * as angular from 'angular';
import ngRedux from 'ng-redux';
import thunkMiddleware = require('redux-thunk');
import {INgReduxProvider} from 'ng-redux';
import todosForm from './components/todos-form';
import todosListController from './controllers/todos-list';
import rootReducer from './reducers';
//endregion

angular.module('app', [ngRedux])
    .config(['$ngReduxProvider', ($ngReduxProvider: INgReduxProvider) => {
        $ngReduxProvider.createStoreWith(rootReducer, [thunkMiddleware]);
    }])
    .directive('todosForm', todosForm)
    .controller('todosList', todosListController)
    .run(() => {
        console.log('Todos app is up and running.');
    });

