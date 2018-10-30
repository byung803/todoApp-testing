import React from 'react';
import { shallow } from 'enzyme';
import filter from '../../reducers/filter';

test('should test SET_VISIBILITY_FILTER', () => {
    const actionFilter = 'filter-check'
    const action = {
        type: 'SET_VISIBILITY_FILTER',
        filter: actionFilter
    }
    const state = filter(null, action);
    expect(state).toBe(actionFilter);

});