import * as chai from 'chai';
import * as todoActions from './todos';

var expect = chai.expect;

describe('TodoActions', () => {
   it('creates a new Todo', ()=> {
        const {payload: todo} = todoActions.addTodo('hello');
        expect(todo.text).to.eql('hello');
   });
});