///<reference path='./../typings/tsd.d.ts'/>
///<reference path='./../reducers/state.d.ts'/>

import * as angular from 'angular';
import {INgRedux} from 'ng-redux';
import State = counter.State;
import * as CounterAction from './../actions/counter';

declare function require(file: string): string;

export default (): ng.IDirective => {
    return {
        restrict: 'E',
        controllerAs: 'counter',
        controller: CounterController,
        template: require('./counter.html'),
        scope: {},
        bindToController: true
    };
};

class CounterController {
    //----------------------------------------
    // dependencies declaration
    //----------------------------------------
    static $inject = [
        '$ngRedux',
        '$scope'
    ];

    constructor($ngRedux: INgRedux, $scope: angular.IScope) {
        const unsubscribe = $ngRedux.connect(this.mapStateToThis, CounterAction)(this);
        $scope.$on('$destroy', unsubscribe);
    }

    mapStateToThis(state: State) {
        console.log('mapStateToThis ------------', state);
        return {
            value: state.counter
        }
    }
}


