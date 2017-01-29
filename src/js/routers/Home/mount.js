import React from 'react';
import { Router, browserHistory } from 'react-router';
import mountComponent from 'utils/mountComponent';
import routes from './routes';

mountComponent('home', <Router routes={routes} history={browserHistory} />);
