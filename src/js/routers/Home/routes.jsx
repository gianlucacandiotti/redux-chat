import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';

const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={About} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
  </Route>
);

export default routes;
