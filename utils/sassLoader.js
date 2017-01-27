var sass = require('node-sass');

function processSass(data, file) {
  try {
    return sass.renderSync({ data: data, file: file }).css.toString('utf8');
  } catch (e) {
    console.error(e);
  }
};

module.exports = processSass;
