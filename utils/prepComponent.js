import React from 'react';
import { createStore } from'redux';
import { Provider } from'react-redux';
import { renderToString } from'react-dom/server';

const prepComponent = (component, reducer) => {
  const store = createStore(reducer);

  const html = renderToString(
    <Provider store={store}>
      {component}
    </Provider>
  );

  const preloadedState = store.getState();

  return { html, preloadedState };
}

export default prepComponent;
