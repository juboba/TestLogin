'use strict';

module.exports = {
    baseDir: 'app',
    paths: {
        sources: {
            js: 'app/**/*js',
            css: 'app/**/*css',
            html: 'app/**/*html'
        },
        dist: 'dist'
    },
    karma: {
        configFile: __dirname + '/../karma.conf.js'
    }
};
