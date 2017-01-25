import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <NavBar />
    );

    expect(wrapper).toBeTruthy();
  });
});
