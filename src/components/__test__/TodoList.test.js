import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../TodoList';
import { todosFixture } from './fixtures';

let wrapper;


describe('TodoList compo with empty todos', () => {

    beforeEach(() => {
        wrapper = shallow(<TodoList todos={[]} />);
    });

    it('should have a div', () => {
        expect(wrapper.find('div').length).toBe(1);
    })

    it('should return nothing when got empty todo list', () => {
        expect(wrapper).toMatchSnapshot();
    })
});

describe('TodoList compo with fixture todos', () => {

    beforeEach(() => {
        wrapper = shallow(<TodoList todos={todosFixture} />);
    });

    it('should return Todo Components when got todosFixture todo list', () => {
        expect(wrapper).toMatchSnapshot();
    })

});