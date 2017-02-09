import React from 'react';
import { createStore } from'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import { Provider } from'react-redux';
import { renderToString } from'react-dom/server';

const prepComponent = (component, reducers) => {
  const reducer = combineReducers(reducers);

  const store = createStore(
    reducer,
    Map({})
  );

  const html = renderToString(
    <Provider store={store}>
      {component}
    </Provider>
  );

  const preloadedState = store.getState();

  return { html, preloadedState };
}

export default prepComponent;
