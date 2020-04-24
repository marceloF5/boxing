import React from 'react';
import { mount } from 'enzyme';
import Button from '../Button';
import 'jest-styled-components';

// const mockForSnapshot = displayName => {
//     const component = function Component() {
//         return null;
//     };
//     component.displayName = displayName;
//     return component;
// };

describe('<Button />', () => {
    test('should render primary button', () => {
        const wrapper = mount(<Button>Add to Bag</Button>);
        const button = wrapper.find('button').debug();

        expect(button).toMatchSnapshot();
    });

    test('should render secondary button', () => {
        const wrapper = mount(<Button variant="secondary">Add to Bag</Button>);
        const button = wrapper.find('button').debug();

        expect(button).toMatchSnapshot();
    });
});
