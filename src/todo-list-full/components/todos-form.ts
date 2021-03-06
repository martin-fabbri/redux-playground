///<reference path='./../typings/tsd.d.ts'/>
///<reference path='./../models/todos.ts'/>

import * as angular from 'angular';
import {INgRedux} from 'ng-redux';
import {Todo} from "../models/todos";
import * as todoActions from "./../actions/todos";

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
    static $inject = [
        '$ngRedux',
        '$scope'
    ];
    constructor($ngRedux: INgRedux, $scope: angular.IScope) {
        const unsubscribe = $ngRedux.connect(this.mapStateToThis, todoActions)(this);
        $scope.$on('$destroy', unsubscribe);
    }

    mapStateToThis(state: Todo[]) {
        return {
            value: state
        }
    }
}