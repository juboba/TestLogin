'use strict';

module.exports = {
    baseDir: 'app',
    stubs: {
        files: 'stubs/*-config.json'
    },
    paths: {
        sources: {
            js: 'app/**/*js'
        },
        dist: 'dist'
    },
    karma: {
        configFile: __dirname + '/../karma.conf.js'
    }
};
