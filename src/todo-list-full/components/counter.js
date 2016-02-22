var CounterAction = require('./../actions/counter');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function () {
    return {
        restrict: 'E',
        controllerAs: 'counter',
        controller: CounterController,
        template: require('./counter.html'),
        scope: {},
        bindToController: true
    };
};
var CounterController = (function () {
    function CounterController($ngRedux, $scope) {
        var unsubscribe = $ngRedux.connect(this.mapStateToThis, CounterAction)(this);
        $scope.$on('$destroy', unsubscribe);
    }
    CounterController.prototype.mapStateToThis = function (state) {
        console.log('mapStateToThis ------------', state);
        return {
            value: state.counter
        };
    };
    CounterController.$inject = [
        '$ngRedux',
        '$scope'
    ];
    return CounterController;
})();
//# sourceMappingURL=counter.js.map