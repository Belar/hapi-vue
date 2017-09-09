# Hapi Vue

> Development setup utilising Vue 2 (Webpack HMR + Vue loader) and Hapi (Nodemon) running with Gulp and BrowserSync. It includes CSS extraction (build only), linting (ESlint) and unit testing (Karma, Mocha, Chai, Sinon, Lab).

For Vue 2 + Webpack 1 check [archive-webpack1 branch](https://github.com/Belar/hapi-vue/tree/archive-webpack1)  
For Vue 1 check [Hapi Vue Simple](https://github.com/Belar/hapi-vue-simple) or [Hapi Vue Plus](https://github.com/Belar/hapi-vue-plus)


## Mini-doc

**/build/** - Contains files needed for build and hot development  
**/build/index_dev.html** - Template for index.html, it will be used by HMR when developing in memory and during production build   
**/client/** - Vue.js app source  
**/config/** - Configuration files  
**/public/** - Public folder served by Hapi  
**/server/** - Server side logic  
**/test/** -   Contains test files  
**/app.js**  - Production server  
**/gulpfile.js**  - Gulp setup file   

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init belar/hapi-vue <project_name>
$ cd <project_name>
```

For tips and guides regarding integration of additional mechanisms (e.g vue-router), visit [Hapi Vue wiki](https://github.com/Belar/hapi-vue/wiki).

NOTE: If you decide to run api (Hapi) unit tests using Mocha, remember about proper NODE_ENV (test), which with Lab is being set automatically.

## Dev Setup

``` bash
# install dependencies
npm install

# run unit tests
npm run unit

# run api unit tests
npm run unit-api

# serve with hot reload at localhost:4000 (proxy from localhost:3000)
npm run dev
```

### Hapi Webpack Middleware

Hapi Vue uses Hapi plugin system for integration of Webpack middlewares [web-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware).

Plugin accepts following options on registration:  
**config** - Webpack configuration file, `./config/webpack.config.js` by default.  
**devOptions** - Options for webpack-dev-middleware, as in the official documentation.  
**hotOptions** - Options for webpack-hot-middleware, as in the official documentation.  
## Production Setup

``` bash
# install dependencies
npm install

# build for production with minification
npm run build

# run application at localhost:3000
node app.js
```

Credits:  
[Vue.js 2](https://vuejs.org/)  
[Hapi](http://hapijs.com/)  
[Gulp](https://gulpjs.com/)  
[BrowserSync](https://www.browsersync.io/)  
[Webpack](https://webpack.js.org/)   
