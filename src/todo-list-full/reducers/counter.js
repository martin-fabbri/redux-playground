var counter_1 = require('./../actions/counter');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case counter_1.INCREMENT_COUNTER:
            return state + 1;
        case counter_1.DECREMENT_COUNTER:
            return state - 1;
        default:
            console.log('return default state ....', state);
            return state;
    }
};
//# sourceMappingURL=counter.js.map