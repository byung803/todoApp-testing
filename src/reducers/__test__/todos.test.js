import todos from '../todos';
import { addTodo, removeTodo, toggleTodo } from '../../actions';

describe('Unknown type reducer', () => {
    it('should return empty state when enter nothing', () => {
        const state = todos([], { type: 'asdf' });
        expect(state).toEqual([]);
    })
})
