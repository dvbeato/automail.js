module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    karma: {
      options: {
        configFile: 'karma.conf.js',
        runnerPort: 9999,
        browsers: ['Chrome', 'Firefox']
      },
      continuous: {
        singleRun: false,
        browsers: ['PhantomJS']
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['karma:continuous']);
};
