'use strict';

var browserSync = require('browser-sync').create();

module.exports = function(gulp, config){

    gulp.task('browserSync', function(){
        browserSync.init({
            server: {
                baseDir: config.baseDir
            }
        });
    });

    gulp.task('watch', ['browserSync'], function(){
        gulp.watch(config.paths.sources.js, browserSync.reload);
    });


};
