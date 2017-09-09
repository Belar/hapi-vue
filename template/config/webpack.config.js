const path = require('path')
const webpack = require('webpack')
const projectRoot = path.resolve(__dirname, '../')

const HtmlWebpackPlugin = require('html-webpack-plugin');
{{#lint}}
const EslintFriendlyFormatter = require('eslint-friendly-formatter')
{{/lint}}

module.exports = {
  entry: ['webpack-hot-middleware/client', './client/main.js'],
  output: {
    path: path.resolve(__dirname, '../public/'),
    publicPath: '/',
    filename: 'build/build.js'
  },
  resolve: {
    modules: [path.join(__dirname, '../node_modules'), 'node_modules'],
    extensions: ['.js', '.vue'],
    alias: {
      'client': path.resolve(__dirname, '../client'),
      'components': path.resolve(__dirname, '../clients/components'),
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
  rules: [
    {{#lint}}
    {
      enforce: "pre",
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      include: projectRoot,
      exclude: /node_modules/,
      options:{
        formatter: EslintFriendlyFormatter
      }
    },
    {{/lint}}
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          'sass': 'vue-style-loader!css-loader!sass-loader'
        }
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: 'vue-html-loader'
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../public/index.html'),
      template: path.resolve(__dirname, '../build/index_dev.html'),
      inject: true
    })
  ],
  devtool: 'eval'
}
