///<reference path='./typings/tsd.d.ts'/>

import * as angular from 'angular';
import ngRedux from 'ng-redux';
import {INgReduxProvider} from 'ng-redux';
import counter from './components/counter';
import rootReducer from './reducers';

angular.module('counter', [ngRedux])
    .config(['$ngReduxProvider',
        ($ngReduxProvider: INgReduxProvider) => $ngReduxProvider.createStoreWith(rootReducer)])
    .directive('ngrCounter', counter)
    .run(() => {
        console.log('Counter app is up and running.');
    });

