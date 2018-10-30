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
    todosFixture.push({
        id: 123,
        text: 'ADD_TODO TEST',
        completed: false
    })
    expect(state).toEqual(todosFixture);
});
