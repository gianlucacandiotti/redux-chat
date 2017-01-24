/**
 * Import vendor style files independently because
 * css-modules is on and we need the classes as they are.
 */

import 'normalize.css/normalize.css';
import 'bulma/bulma.sass';

/**
 * Import our global source styles like helpers and some base styles.
 */

import 'sass/index.scss';
