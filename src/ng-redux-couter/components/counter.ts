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

}


