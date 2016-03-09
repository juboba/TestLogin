'use strict';

var browserSync = require('browser-sync').create();

module.exports = function(gulp, config){

    gulp.task('serve', function(){
        browserSync.init({
            server: {
                baseDir: [config.baseDir, 'node_modules']
            }
        });
    });

    gulp.task('watch', ['serve'], function(){
        gulp.watch([
            config.paths.sources.js,
            config.paths.sources.html,
            config.paths.sources.css
            ], browserSync.reload);
    });


};
