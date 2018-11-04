import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

it('should have same snapshot Footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
})