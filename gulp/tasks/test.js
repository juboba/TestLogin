'use strict';

var karmaServer = require('karma').Server;

module.exports = function(gulp, config){

    gulp.task('test', function(done){
        new karmaServer({
            configFile: config.karma.configFile,
            singleRun: true
        }, done).start();
    });

};
