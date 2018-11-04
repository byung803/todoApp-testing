import React from 'react';
import { shallow } from 'enzyme';
import { Link } from '../Link';

let wrapper, onClickSpy;

beforeEach(() => {
    onClickSpy = jest.fn();
    wrapper = shallow(<Link onClick={onClickSpy} disabled={true} children={[]} />);
})

describe('Link Component', () => {
    it('should have a button', () => {
        expect(wrapper.find('button').length).toBe(1);
    })

    it('should execute onClick method when clicked', () => {
        wrapper.find('button').simulate('click')
        expect(onClickSpy).toHaveBeenCalled();
    })

    it('should have snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})