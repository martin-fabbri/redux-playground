///<reference path='./../typings/tsd.d.ts'/>
///<reference path='./../models/todos.ts'/>

import * as angular from 'angular';
import {INgRedux} from 'ng-redux';
import {Todo} from "../models/todos";
import * as todoActions from "./../actions/todos";

export default class TodosListController {

    public test: string[] = ['a', 'b', 'c'];

    //----------------------------------------
    // dependencies declaration
    //----------------------------------------
    static $inject = [
        '$ngRedux',
        '$scope'
    ];
    constructor($ngRedux: INgRedux, $scope: angular.IScope) {
        const unsubscribe = $ngRedux.connect(this.mapStateToThis, todoActions)(this);
        $scope.$on('$destroy', unsubscribe);
    }

    mapStateToThis(state: Todo[]) {
        console.log('Todo List ...', state);
        return {
            todos: state
        }
    }
}