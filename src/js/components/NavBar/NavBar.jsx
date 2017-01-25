import React from 'react';
import logo from './assets/logo.svg';

const NavBar = () => (
  <nav className="nav has-shadow">
  <div className="container">
    <div className="nav-left">
      <a className="nav-item">
        <img src={logo} alt="Redux logo" />
      </a>
      <a className="nav-item is-tab is-hidden-mobile is-active">Home</a>
      <a className="nav-item is-tab is-hidden-mobile">Features</a>
      <a className="nav-item is-tab is-hidden-mobile">Pricing</a>
      <a className="nav-item is-tab is-hidden-mobile">About</a>
    </div>
    <span className="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div className="nav-right nav-menu">
      <a className="nav-item is-tab is-hidden-tablet is-active">Home</a>
      <a className="nav-item is-tab is-hidden-tablet">Features</a>
      <a className="nav-item is-tab is-hidden-tablet">Pricing</a>
      <a className="nav-item is-tab is-hidden-tablet">About</a>
      <a className="nav-item is-tab">
        <figure className="image is-16x16" style={{ marginRight: '8px' }}>
          <img src="http://bulma.io/images/jgthms.png" alt="Profile" />
        </figure>
        Profile
      </a>
      <a className="nav-item is-tab">Log out</a>
    </div>
  </div>
</nav>
);

export default NavBar;
