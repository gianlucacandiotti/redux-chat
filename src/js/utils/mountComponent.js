import 'react';
import { render } from 'react-dom';

export default function mountComponent(selector, component) {
  // eslint-disable-next-line no-undef
  const mountPoint = document.getElementById(selector);

  if (mountPoint) {
    render(
      component,
      mountPoint
    );
  }
}
