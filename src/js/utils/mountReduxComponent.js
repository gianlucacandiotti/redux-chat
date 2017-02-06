import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import mountComponent from './mountComponent';

const preloadedState = window.__PRELOADED_STATE__;

const mountReduxComponent = (selector, component, reducer) => {
  const logger = createLogger({
    stateTransformer: (state) => {
      const newState = {};
      const stateObj = state.toObject();

      for (const i of Object.keys(stateObj)) {
        if (Immutable.Iterable.isIterable(stateObj[i])) {
          newState[i] = stateObj[i].toJS();
        } else {
          newState[i] = stateObj[i];
        }
      }

      return newState;
    }
  });

  const store = createStore(
    reducer,
    Immutable.fromJS(preloadedState),
    applyMiddleware(logger)
  );

  mountComponent(
    selector,
    <Provider store={store}>
      {component}
    </Provider>
  );
}

export default mountReduxComponent;
