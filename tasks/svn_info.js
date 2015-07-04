/*
 * grunt-svn-info
 * https://github.com/kevinkao/grunt-svn-info
 *
 * Copyright (c) 2015 kevinkao
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  function type(obj) {
    return Object.prototype.toString.call(obj);
  }

  var spawn = require('child_process').spawn;
  var parseString = require('xml2js').parseString;

  grunt.registerMultiTask('svn_info', 'Parsing svn info into grunt.template', function() {
    var done = this.async();
    var svn_info = this.options({});

    switch (type(this.data)) {
      case '[object String]':
        var info         = spawn('svn', ['info', this.data, '--xml']);
        var buff         = new Buffer([]);
        var target       = this.target;

        info.stdout.on('data', function(data) {
          buff = Buffer.concat([buff, data]);
        });

        info.on('close', function(code) {
          var xml = parseString(buff.toString(), function(e, obj) {
            var entry = obj.info.entry[0];
            svn_info[target] = {
              "path" : entry.$.path,
              "revision" : entry.$.revision,
              "kind" : entry.$.kind,
              "url" : entry.url[0],
              "repo_root": entry.repository[0].root[0],
              "repo_uuid" : entry.repository[0].uuid[0],
              "wc_abspath" : entry['wc-info'][0]['wcroot-abspath'][0],
              "wc_schedule" : entry['wc-info'][0].schedule[0],
              "wc_depth" : entry['wc-info'][0].depth[0],
              "last_revision": entry.commit[0].$.revision,
              "last_author" : entry.commit[0].author[0],
              "last_date" : entry.commit[0].date[0]
            };

            grunt.config.merge({ svn_info : svn_info });

            console.log(grunt.config.get('svn_info'));
            done();
          });
        });
        break;
    }
  });

};
