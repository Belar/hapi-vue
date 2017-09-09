'use strict'

const Webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')

exports.register = function (server, options, next) {
  const webpackCompiler = Webpack(options.config)
  const devMiddleware = WebpackDevMiddleware(webpackCompiler, options.devOptions)
  const hotMiddleware = WebpackHotMiddleware(webpackCompiler, options.hotOptions)

  server.ext('onRequest', (request, reply) => {
    const rawRequest = request.raw.req
    const rawResponse = request.raw.res
    devMiddleware(rawRequest, rawResponse, (error) => {
      if (error) {
        return reply(error)
      }
      return reply.continue()
    })
  })

  server.ext('onRequest', (request, reply) => {
    const rawRequest = request.raw.req
    const rawResponse = request.raw.res
    hotMiddleware(rawRequest, rawResponse, (error) => {
      if (error) {
        return reply(error)
      }
      return reply.continue()
    })
  })

  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}
