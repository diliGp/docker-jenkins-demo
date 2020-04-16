import React from 'react';
import { shallow } from 'enzyme';
import { Counter } from './Counter';
import { Provider } from 'react-redux';
import { store } from '../../app/store';


const setup = () => {
    const wrapper = shallow(
        <Provider store={store}>
            <Counter />
        </Provider>
    );
    expect(wrapper.dive().dive().find('[data-test="container-counter"]').length).toBe(1);
}

setup();

test('', () => undefined)