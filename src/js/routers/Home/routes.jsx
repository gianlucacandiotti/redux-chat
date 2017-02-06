import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './index';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={About} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
  </Route>
);

export default routes;
