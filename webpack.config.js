const webpack = require('webpack');


const config = {
  
  entry: './src/js/index.js',
  
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module:{
    rules: [   

      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }

    ]
  }

}

module.exports = config;