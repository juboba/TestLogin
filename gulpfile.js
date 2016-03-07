var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var stubby = require('gulp-stubby-server');
var karmaServer = require('karma').Server;


gulp.task('watch', ['browserSync'], function(){
    gulp.watch('app/**/*js', browserSync.reload);
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });
});

gulp.task('stubby', function(cb){
    var options = {
        callback: function(server, options){
            console.log(server.get.toString());
            server.get(1, function(err, endpoint){
                //console.log(endpoint);
            });
        },
        files: [
            'stubs/*-config.json'
        ]
    };

    stubby(options, cb);
});

gulp.task('test', ['stubby'], function(done){
    new karmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('default', ['stubby', 'browserSync', 'watch'], function(){
    console.log('hello!');
});
