import React from 'react';
import { addTodo, removeTodo, setVisibilityFilter, toggleTodo } from '../../actions/index';

test('should test addTodo action generator', () => {
    const text = 'test text';
    const action = addTodo(text);
    expect(action).toEqual({
        type: 'ADD_TODO',
        id: expect.any(Number),
        text
    });
});

test('should test removeTodo action generator', () => {
    const action = removeTodo(123);
    expect(action).toEqual({
        type: 'REMOVE_TODO',
        id: 123
    });
});

test('should test setVisibilityFilter action generator', () => {
    const action = setVisibilityFilter('filter_check');
    expect(action).toEqual({
        type: 'SET_VISIBILITY_FILTER',
        filter: 'filter_check'
    });
})

test('should test toggleTodo action generator', () => {
    const id = 1234;
    expect(toggleTodo(id)).toEqual({
        type: 'TOGGLE_TODO',
        id
    });
});