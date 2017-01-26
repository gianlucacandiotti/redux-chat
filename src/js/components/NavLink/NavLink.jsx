import React from 'react'
import { Link } from 'react-router'

const NavLink = (props) => (
  <Link {...props} activeClassName="is-active" />
);

export default NavLink;
