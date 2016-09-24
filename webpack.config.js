var webpack = require('webpack');
var plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = {
  entry: './index.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules|lib/
			},
			{
        test: /\.scss$/,
        loaders:[
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass?sourceMap'
        ],
        exclude: /node_modules|lib/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      { test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/, loader: 'file-loader' }
    ]
  },
  plugins: plugins
};
