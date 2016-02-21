import * as angular from 'angular';
import ngRedux from 'ng-redux';
import counter from './components/counter';

angular.module('counter', [ngRedux])
    .directive('ngrCounter', counter)
    .run(() => {
        console.log('Counter app is up and running.');
    });

