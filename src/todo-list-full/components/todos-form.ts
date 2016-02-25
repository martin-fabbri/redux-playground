///<reference path='./../typings/tsd.d.ts'/>
///<reference path='./../models/todos.ts'/>

import * as angular from 'angular';
//import {INgRedux} from 'ng-redux';
import {Todo} from "../models/todos";

declare function require(file: string): string;

export default (): ng.IDirective => {
    return {
        restrict: 'E',
        controllerAs: 'form',
        controller: TodosFormController,
        template: require('./todos-form.html'),
        scope: {},
        bindToController: true
    };
};

class TodosFormController {
    //----------------------------------------
    // dependencies declaration
    //----------------------------------------
    //static $inject = [
    //    '$ngRedux',
    //    '$scope'
    //];
    //constructor($ngRedux: INgRedux, $scope: angular.IScope) {
    //    //const unsubscribe = $ngRedux.connect(this.mapStateToThis, CounterAction)(this);
    //    //$scope.$on('$destroy', unsubscribe);
    //}

    addTodo(newTodo: Todo) {
        console.log('Adding new todo', newTodo);
    }

    //mapStateToThis(state: State) {
    //    console.log('mapStateToThis ------------', state);
    //    return {
    //        value: state.counter
    //    }
    //}
}