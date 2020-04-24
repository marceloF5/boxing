import React from 'react';
import { mount } from 'enzyme';
import App from '../app';

describe('App', () => {
    test('should render', () => {
        const wrapper = mount(<App />);

        expect(wrapper.exists()).toBeTruthy();
    });
});
