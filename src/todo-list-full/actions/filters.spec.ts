import {Action} from 'redux-actions';
import * as chai from 'chai';
import * as filterActions from './filters';
import * as filterTypes from './../constants/todos-filters';

var expect = chai.expect;

describe('FilterActions', () => {
    it('set visibility filter', ()=> {
        const action: Action = filterActions.setVisibilityFilter();
        expect(action.payload).to.eql(filterTypes.SHOW_ALL);
    });

    it('set visibility filter', ()=> {
        const action: Action = filterActions.setVisibilityFilter(filterTypes.SHOW_ACTIVE);
        expect(action.payload).to.eql(filterTypes.SHOW_ACTIVE);
    });
});