///<reference path='./../typings/tsd.d.ts'/>
///<reference path='./../models/todos.ts'/>

import * as angular from 'angular';
import {INgRedux} from 'ng-redux';
import * as todoActions from "./../actions/todos";
import * as filterOptions from "./../constants/todos-filters";

declare function require(file: string): string;

export default (): ng.IDirective => {
    return {
        restrict: 'E',
        controllerAs: 'bar',
        controller: FilterBarController,
        template: require('./filter-bar.html'),
        scope: {},
        bindToController: true
    };
};

class FilterBarController {
    public filters = filterOptions;
}