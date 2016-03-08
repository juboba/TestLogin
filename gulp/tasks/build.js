'use strict';

var uglify = require('gulp-uglify');

module.exports = function(gulp, config){

    gulp.task('build', function(){
        return gulp.src(config.paths.sources.js)
            .pipe(uglify())
            .pipe(gulp.dest(config.paths.dist));
    });

};
