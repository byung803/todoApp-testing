import React from 'react';
import { shallow } from 'enzyme';
import Link from '../../components/Link';

test('should test Link button using in Footer', () => {
    const onClickSpy = jest.fn();
    const activeSpy = jest.fn();
    const childrenSpy = jest.fn();

    const wrapper = shallow(<Link children={childrenSpy} active={activeSpy} onClick={onClickSpy} />);

    wrapper.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();

    wrapper.find('button').prop('disabled')(childrenSpy)
    expect(activeSpy).toHaveBeenCalled();

    wrapper.find('button').prop('children')(childrenSpy)
    expect(childrenSpy).toHaveBeenCalled();
    //이거 함수 하나하나나 알지 제대로 테스트 할줄 모르는거 같아서 강의들으러간다.
})