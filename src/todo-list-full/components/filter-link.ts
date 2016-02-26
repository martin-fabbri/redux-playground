///<reference path='./../typings/tsd.d.ts'/>
///<reference path='./../models/todos.ts'/>

import * as angular from 'angular';
import {INgRedux} from 'ng-redux';
import * as filterActions from "./../actions/filters";

declare function require(file: string): string;

export default (): ng.IDirective => {
    return {
        restrict: 'E',
        controllerAs: 'link',
        controller: FilterLinkController,
        template: require('./filter-link.html'),
        scope: {
            label: '@',
            filter: '@'
        },
        bindToController: true
    };
};

class FilterLinkController {
    filter: string;
    label: string;

    //----------------------------------------
    // dependencies declaration
    //----------------------------------------
    static $inject = [
        '$ngRedux',
        '$scope'
    ];
    constructor($ngRedux: INgRedux, $scope: angular.IScope) {
        const unsubscribe = $ngRedux.connect(this.mapStateToThis, filterActions)(this);
        $scope.$on('$destroy', unsubscribe);
    }

    mapStateToThis = (state: any) => {
        console.log('FilterLinkController', state);
        console.log('label', this.label);
        console.log('filter', this.filter);
        console.log('isCurrentFilter', (state.currentFilter === this.filter));
        console.log('this', this);
        return {
            isCurrentFilter: (state.currentFilter === this.filter)
        }
    }
}