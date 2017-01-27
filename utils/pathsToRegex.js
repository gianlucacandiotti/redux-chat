/**
 * Converts an array of paths to Regular Expressions
 * so they can be consumed by Express and serve a
 * single HTML for multiple paths.
 * @param  {Array} paths : array of path strings. Must start with '/'.
 * @return {RegExp}      : Regular Expression to match all paths.
 */
const pathsToRegex = (paths) => (
  new RegExp(paths.map(e => `(^\\${e}$)`).join('|'))
);

export default pathsToRegex;