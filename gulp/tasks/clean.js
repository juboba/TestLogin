'use strict';

var clean = require('gulp-clean');

module.exports = function(gulp, config){

    gulp.task('clean', function(){
        return gulp.src(config.paths.dist, {read: false})
            .pipe(clean());
    });

};
