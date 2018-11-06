import React from 'react';
import { shallow } from 'enzyme';
import { AddTodo } from '../AddTodo';

let wrapper, value, addTodoSpy;

beforeEach(() => {
    addTodoSpy = jest.fn();
    wrapper = shallow(<AddTodo addTodo={addTodoSpy} />);
})

it('should have a form, input, button', () => {
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
});

describe('AddTodo container', () => {
    beforeEach(() => {
        value = 'abcd';
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.update();
    })

    it('should change the value by handleInput', () => {
        expect(wrapper.find('input').prop('value')).toEqual(value);
    })

    it('should set value to empty after submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        wrapper.update();
        expect(wrapper.find('input').prop('value')).toEqual('');
    })

    it('should call AddTodoSpy when submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        wrapper.update();
        expect(addTodoSpy).toHaveBeenCalled();
    })

    it('should maintain snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
});