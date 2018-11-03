const autoprefixer = require('autoprefixer');
const globalImport = require('postcss-global-import');

module.exports = {
  plugins: [
    autoprefixer({ browsers: ['last 3 versions'] }),
    globalImport()
  ]
};
