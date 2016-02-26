import * as chai from 'chai';
import filters from './filters';
import {
    SHOW_ALL,
    SHOW_ACTIVE
} from './../constants/todos-filters';

import {
    SET_VISIBILITY_FILTER
} from './../constants/action-types';

var expect = chai.expect;

describe('filter reducer', () => {
    it('handles set visibility filter', ()=> {
        let state: string = SHOW_ALL;
        state = filters(state, {
            type: SET_VISIBILITY_FILTER,
            payload: SHOW_ACTIVE
        });
        expect(state).to.eql(SHOW_ACTIVE);
    });
});