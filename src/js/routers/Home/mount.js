import React from 'react';
import { Router, browserHistory } from 'react-router';
import mountReduxComponent from 'utils/mountReduxComponent';
import routes from './routes';
import reducer from './reducer';

mountReduxComponent('home', <Router routes={routes} history={browserHistory} />, reducer);
