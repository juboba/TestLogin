'use strict';

var gulp = require('gulp');
var config = require('./gulp/config');

require('./gulp/tasks/browser-sync')(gulp, config);
require('./gulp/tasks/stubby')(gulp, config);
require('./gulp/tasks/test')(gulp, config);

gulp.task('default', ['stubby', 'browserSync', 'watch'], function(){
    console.log('hello!');
});
