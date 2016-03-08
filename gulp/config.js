'use strict';

module.exports = {
    baseDir: 'app',
    stubs: {
        files: 'stubs/*-config.json'
    },
    sources: {
        js: 'app/**/*js'
    },
    karma: {
        configFile: __dirname + '/../karma.conf.js'
    }
};
