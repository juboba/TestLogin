'use strict';

module.exports = {
    baseDir: 'app',
    stubs: {
        files: 'stubs/*-config.json'
    },
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
