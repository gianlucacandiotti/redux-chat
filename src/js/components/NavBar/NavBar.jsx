import React, { Component, PropTypes } from 'react';
import NavLink from 'components/NavLink/NavLink';
import styles from './NavBar.scssm';
import logo from './assets/logo.svg';

class NavBar extends Component {
  static propTypes = {
    navRight: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      index: PropTypes.bool,
    }).isRequired).isRequired,
  };

  state = {
    isNavOpen: false,
  };

  onNavToggleClick = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };

  renderNavRight = () => {
    const {
      navRight,
    } = this.props;

    const {
      isNavOpen,
    } = this.state;

    if (!navRight) {
      return null
    } else {
      return (
        <div className={`nav-right nav-menu${isNavOpen ? ' is-active' : ''}`}>
          {navRight.map((item, i) => (
            <NavLink to={item.link} key={i} className="nav-item is-tab" onlyActiveOnIndex={!!item.index}>{item.text}</NavLink>
          ))}
        </div>
      )
    }
  };

  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <img src={logo} className={styles.logo} alt="Redux logo" />
            </a>
          </div>
          <span className="nav-toggle" onClick={this.onNavToggleClick}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          {this.renderNavRight()}
        </div>
      </nav>
    );
  }
}

export default NavBar;
