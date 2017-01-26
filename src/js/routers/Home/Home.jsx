import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import mountComponent from 'utils/mountComponent';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';

const HomeRouter = (
  <Router history={hashHistory}>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={SignUp}/>
  </Router>
);

mountComponent('home', HomeRouter);
