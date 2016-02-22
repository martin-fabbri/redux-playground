var angular = require('angular');
var ng_redux_1 = require('ng-redux');
var thunkMiddleware = require('redux-thunk');
var counter_1 = require('./components/counter');
var reducers_1 = require('./reducers');
angular.module('counter', [ng_redux_1.default])
    .config(['$ngReduxProvider',
    function ($ngReduxProvider) { return $ngReduxProvider.createStoreWith(reducers_1.default, [thunkMiddleware]); }])
    .directive('ngrCounter', counter_1.default)
    .run(function () {
    console.log('Counter app is up and running.');
});
//# sourceMappingURL=main.js.map