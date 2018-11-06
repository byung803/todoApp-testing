import React from 'react';
import { shallow } from 'enzyme';
import Todo from '../Todo';

let wrapper, toggleTodoSpy, removeTodoSpy;

beforeEach(() => {
    toggleTodoSpy = jest.fn();
    removeTodoSpy = jest.fn();
    wrapper = shallow(<Todo toggleTodo={toggleTodoSpy} removeTodo={removeTodoSpy} />);
});

describe('Todo Compo', () => {
    it('should have a li and a button', () => {
        expect(wrapper.find('li').length).toBe(1);
        expect(wrapper.find('button').length).toBe(1);
    })

    it('should use toggleTodo when li is clicked', () => {
        wrapper.find('li').simulate('click');
        expect(toggleTodoSpy).toHaveBeenCalled();
    })

    it('should use removeTodo when button is clicked', () => {
        wrapper.find('button').simulate('click');
        expect(removeTodoSpy).toHaveBeenCalled();
    })
})