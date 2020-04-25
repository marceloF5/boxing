import React from 'react';
import { mount } from 'enzyme';
import App from '../app';

describe('App', () => {
    test('should render', () => {
        const wrapper = mount(<App />);
        const div = wrapper.find('div').debug();

        expect(wrapper.exists()).toBeTruthy();
        expect(div).toMatchSnapshot();
    });
});
