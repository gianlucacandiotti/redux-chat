import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import NavLink from 'components/NavLink/NavLink';
import NavBar from './index';

describe('NavBar component', () => {
  it('shows the correct number of links', () => {
    const navRight = [
      {
        text: 'About',
        link: '/',
      },
      {
        text: 'Login',
        link: 'login',
      }
    ];

    const wrapper = shallow(
      <NavBar
        navRight={navRight}
      />
    );

    expect(wrapper.find(NavLink)).toHaveLength(2);
  });

  it('opens the nav menu according to the state', () => {
    const navRight = [
      {
        text: 'About',
        link: '/',
      }
    ];

    const wrapper = shallow(
      <NavBar
        navRight={navRight}
      />
    );

    wrapper.setState({
      isNavOpen: true,
    });

    expect(wrapper.find('.nav-menu.is-active').exists()).toBe(true);
  });
});
