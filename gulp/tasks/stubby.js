'use strict';

var stubby = require('gulp-stubby-server');

module.exports = function(gulp, config){

    gulp.task('stubby', function(cb){
        var options = {
            callback: function(server, options){
                console.log(server.get.toString());
                server.get(1, function(err, endpoint){
                    //console.log(endpoint);
                });
            },
            files: [
                config.stubs.files
            ]
        };

        stubby(options, cb);
    });

};
