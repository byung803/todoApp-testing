import React from 'react';
import { shallow } from 'enzyme';
import todosReducer from '../../reducers/todos';
import { todosFixture } from '../fixtures/index';

test('should test todos Reducer case ADD_TODO', () => {
    const action = {
        type: 'ADD_TODO',
        id: 123,
        text: 'ADD_TODO TEST'
    };
    const state = todosReducer(todosFixture, action);
    expect(state).toEqual([
        ...todosFixture,
        {
            id: 123,
            text: 'ADD_TODO TEST',
            completed: false
        }
    ]);
});

test('should test REMOVE_TODO reducer', () => {
    const action = {
        type: 'REMOVE_TODO',
        id: 2
    }
    const state = todosReducer(todosFixture, action);
    expect(state).toEqual([{
        id: 1,
        text: 'first',
        completed: false
    }, {
        id: 3,
        text: 'third',
        completed: false
    }])
})

test('should test TOGGLE_TODO reducer', () => {
    const action = {
        type: 'TOGGLE_TODO',
        id: 3
    }
    const update = {
        id: 3,
        text: 'third',
        completed: true
    }
    const state = todosReducer(todosFixture, action);
    const newFixture = todosFixture.map((todo) => {
        if (todo.id === update.id) {
            return {
                ...todo,
                ...update
            }
        } else
            return todo;
    })

    expect(state).toEqual(newFixture);

})