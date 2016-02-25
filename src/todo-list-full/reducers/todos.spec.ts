import * as chai from 'chai';
import {Todo} from './../models/todos';
import todos from './todos';
import {
    ADD_TODO
} from './../constants/action-types';

var expect = chai.expect;

describe('todo reducer', () => {
   it('handles add', ()=> {
       let state: Todo[] = [{id: 0, text: '', completed: true}];
       state = todos(state, {
           type: ADD_TODO,
           payload: {text: 'hello', completed: false}
       });

       expect(state.length).to.eql(2);
       expect(state[1]).to.eql({
           id: 1,
           text: 'hello',
           completed: false
       });
   });
});