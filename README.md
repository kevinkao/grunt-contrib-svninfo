# grunt-svn-info

> Parsing svn info into grunt.template

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-svn-info --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svn-info');
```

## The "svn_info" task

### Overview
In your project's Gruntfile, add a section named `svn_info` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  svn_info: {
    "target": "path/to/svn/target"
  },
});
```

### Available options

#### <%= svn_info.{target}.path %>
#### <%= svn_info.{target}.revision %>
#### <%= svn_info.{target}.kind %>
#### <%= svn_info.{target}.url %>
#### <%= svn_info.{target}.repo_root %>
#### <%= svn_info.{target}.repo_uuid %>
#### <%= svn_info.{target}.wc_abspath %>
#### <%= svn_info.{target}.wc_schedule %>
#### <%= svn_info.{target}.wc_depth %>
#### <%= svn_info.{target}.last_revision %>
#### <%= svn_info.{target}.last_author %>
#### <%= svn_info.{target}.last_date %>

### Usage Examples

```js
grunt.initConfig({
  svn_info: {
    my_project: 'path/to/my_project'
  },
  
  sometask: {
    dist: 'dist_r<%= svn_info.my_project.last_revision %>'
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
