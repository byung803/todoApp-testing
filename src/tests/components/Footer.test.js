import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

test('should test Footer component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
})