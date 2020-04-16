import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App Test', () => {
  it('Should render app', () => {

    const wrapper = shallow(<App />);
    const appContainer = wrapper.find(`[data-test="container-app"]`);
    expect(appContainer.length).toBe(1);
  })
})