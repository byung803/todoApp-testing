import {
    addTodo,
    removeTodo,
    setVisibilityFilter,
    toggleTodo
} from '../index';


describe('addTodo action generater', () => {
    it('should contain proper type', () => {
        const action = addTodo();
        expect(action.type).toBe('ADD_TODO');
    });

    it('should return id with number', () => {
        const action = addTodo();
        expect(action.id).toEqual(expect.any(Number));
    })

    it('should return proper text', () => {
        const action = addTodo('test text');
        expect(action.text).toBe('test text');
    })
})

describe('removeTodo action generater', () => {
    it('should contain proper type', () => {
        const action = removeTodo();
        expect(action.type).toBe('REMOVE_TODO');
    });

    it('should return proper id', () => {
        const action = removeTodo(123);
        expect(action.id).toBe(123);
    })
})

describe('setVisibilityFilter action generater', () => {
    it('should contain proper type', () => {
        const action = setVisibilityFilter();
        expect(action.type).toBe('SET_VISIBILITY_FILTER');
    });

    it('should return proper filter', () => {
        const action = setVisibilityFilter('filter check');
        expect(action.filter).toBe('filter check');
    })
})

describe('toggleTodo action generater', () => {
    it('should contain proper type', () => {
        const action = toggleTodo();
        expect(action.type).toBe('TOGGLE_TODO');
    });

    it('should return proper id', () => {
        const action = toggleTodo(1234);
        expect(action.id).toBe(1234);
    })
})
