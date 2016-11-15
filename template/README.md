# {{ name }}

{{ description }}

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

## Dev Setup

``` bash
# install dependencies
npm install

{{#unit}}
# run unit tests
npm run unit
{{/unit}}

# serve with hot reload at localhost:3000 (with proxy at localhost:4000)
npm run dev
```

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
[Vue 2](https://vuejs.org/)  
[Hapi](http://hapijs.com/)  
[Gulp](https://gulpjs.com/)  
[BrowserSync](https://www.browsersync.io/)  
[Webpack](https://webpack.github.io/)  
