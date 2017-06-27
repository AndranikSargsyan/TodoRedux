const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './public/src/App.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/'
  },

  module: {
    rules: [
        {
       		test: /\.(jsx|js)$/,
       		exclude: [/node_modules/, /\.test.js$/],
       		loaders: ['babel-loader']
       	},

        {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
              }, {
                loader: 'css-loader'
              }]
        }]
  },
};
