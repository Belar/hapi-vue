'use strict';

const Webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');

const register = function (server, options, next) {
  const webpackCompiler = Webpack(options.config);
  const devMiddleware = WebpackDevMiddleware(webpackCompiler, options.devOptions);
  const hotMiddleware = WebpackHotMiddleware(webpackCompiler, options.hotOptions);

  server.ext({
    type: 'onRequest',
    method: (request, h) => {
      return new Promise((resolve, reject) => {
        const rawRequest = request.raw.req;
        const rawResponse = request.raw.res;
        devMiddleware(rawRequest, rawResponse, (error) => {
          if (error) {
            return reject(error);
          }
          return resolve(h.continue);
        });
      });
    }
  });

  server.ext({
    type: 'onRequest',
    method: (request, h) => {
      return new Promise((resolve, reject) => {
        const rawRequest = request.raw.req;
        const rawResponse = request.raw.res;
        hotMiddleware(rawRequest, rawResponse, (error) => {
          if (error) {
            return reject(error);
          }
          return resolve(h.continue);
        });
      });
    }
  });
};

exports.plugin = {
  register: register,
  pkg: require('./package.json')
};
