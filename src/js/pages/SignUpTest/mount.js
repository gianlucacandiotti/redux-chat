import React from 'react';
import mountReduxComponent from 'utils/mountReduxComponent';
import SignUpTest from './index';
import reducer from './reducer';

mountReduxComponent('sign-up-test', <SignUpTest />, reducer);
