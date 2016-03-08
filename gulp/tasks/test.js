'use strict';

var karmaServer = require('karma').Server;

module.exports = function(gulp, config){

    gulp.task('test', ['stubby'], function(done){
        new karmaServer({
            configFile: __dirname + '/karma.conf.js',
            singleRun: true
        }, done).start();
    });

};
