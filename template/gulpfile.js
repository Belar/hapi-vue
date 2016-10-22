var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  path = require('path'),
  nodemon = require('gulp-nodemon');

// Run Nodemon and connect to BrowserSync
gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({

      // Nodemon the dev server
      script: 'app.js',

      // Watch core server file(s) that require restart on change
      watch: ['app.js', 'server/**/*.*']
    })
    .on('start', function onStart() {

      // Ensure only one call
      if (!called) {
        return cb();
      }
      called = true;
    })
    .on('restart', function onRestart() {
      // Reload connected browsers after a slight delay
      console.log('Reload');
      setTimeout(function () {
        browserSync.reload({
          stream: false
        });
      }, 1000);
    });
});

gulp.task('browser-sync', ['nodemon'], function () {

  // Config options: http://www.browsersync.io/docs/options/
  browserSync.init({

    // Watch the following files, inject changes or refresh
    files: ['public/assets/js/**/*.*', 'public/assets/css/**/*.*', 'public/assets/images/**/*.*'],

    // Proxy our Hapi app
    proxy: 'http://localhost:3000',
    // Use the following port for the proxied app to avoid clash
    port: 4000,
    reloadDelay: 500,
    injectChanges: true,
    open: false
  });
  console.log('Initiate BrowserSync');
});

// BUILD

gulp.task('default', ['browser-sync']);
