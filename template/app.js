'use strict';

const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server();
server.connection({
  port: 3000
});

// Register webpack HMR, only for non-production environments
if (process.env.NODE_ENV !== 'production') {

  const WebpackConfig = require('./config/webpack.config.js'); // Webpack config
  const HapiWebpackDevMiddleware = require('hapi-webpack-dev-middleware');
  const HapiWebpackHotMiddleware = require('hapi-webpack-hot-middleware');

  server.register([{
    register: HapiWebpackDevMiddleware,
    options: {
      config: WebpackConfig,
      options: {
        noInfo: true,
        publicPath: WebpackConfig.output.publicPath,
        stats: {
          colors: true
        }
      }
    }
  }, {
    register: HapiWebpackHotMiddleware
  }], function (err) {
    if (err) {
      throw err;
    }
  });

}

server.register([Inert], function (err) {

  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/assets/{filepath*}',
    config: {
      auth: false,
      cache: {
        expiresIn: 24 * 60 * 60 * 1000,
        privacy: 'public'
      }
    },
    handler: {
      directory: {
        path: __dirname + '/public/assets/',
        listing: false,
        index: false
      }
    }
  });

  // Example api call
  server.route({
    method: 'GET',
    path: '/api/call',
    handler: function (request, reply) {
      reply({
        message: 'Hello!'
      })
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('./public/index.html');
    }
  });
});

server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
