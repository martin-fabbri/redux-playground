///<reference path='./../typings/tsd.d.ts'/>
///<reference path='./../models/todos.ts'/>

import * as angular from 'angular';
import {INgRedux} from 'ng-redux';
import {Todo} from "../models/todos";
import * as todoActions from "./../actions/todos";
import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED
} from "./../constants/todos-filters";

export default class TodosListController {
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

    getVisibleTodos(todos: Todo[], filter: string) {
        console.log('getVisibleTodos, todos', todos);
        console.log('getVisibleTodos, filter', filter);
        switch (filter)
        {
            case SHOW_ALL:
                return todos;
            case SHOW_ACTIVE:
                return todos.filter(t => !t.completed);
            case SHOW_COMPLETED:
                return todos.filter(t => t.completed);
            default:
                return todos;
        }
    }

    mapStateToThis = (state: any) => {
        console.log('Todo List ...', state);
        return {
            todos: this.getVisibleTodos(state.todos, state.currentFilter)
        }
    }
}