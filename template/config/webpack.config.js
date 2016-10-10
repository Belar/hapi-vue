const path = require('path')
const webpack = require('webpack')
const projectRoot = path.resolve(__dirname, '../')

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['webpack-hot-middleware/client', './client/main.js'],
  output: {
    path: path.resolve(__dirname, '../public/'),
    publicPath: '/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'client': path.resolve(__dirname, '../client'),
      'components': path.resolve(__dirname, '../clients/components'),
      'vue': 'vue/dist/vue'
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    {{#lint}}
    preLoaders: [{
      test: /\.vue$/,
      loader: 'eslint',
      include: projectRoot,
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'eslint',
      include: projectRoot,
      exclude: /node_modules/
      }],
    {{/lint}}
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.html$/,
      loader: 'vue-html'
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  {{#lint}}
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  {{/lint}}
  vue: {
    loaders: {
      'sass': 'vue-style!css!sass'
    }
  },
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../public/index.html'),
      template: path.resolve(__dirname, '../build/index_dev.html'),
      inject: true
    })
  ],
  devtool: '#eval'
}
