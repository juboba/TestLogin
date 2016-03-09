'use strict';

var gulp = require('gulp');
var config = require('./gulp/config');

require('./gulp/tasks/serve')(gulp, config);
require('./gulp/tasks/stubby')(gulp, config);
require('./gulp/tasks/build')(gulp, config);
require('./gulp/tasks/test')(gulp, config);
require('./gulp/tasks/clean')(gulp, config);

//TODO: put these in order with runSequence:
gulp.task('default', ['stubby', 'build', 'serve', 'watch'], function(){
    console.log('hello!');
});
