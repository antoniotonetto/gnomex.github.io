module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: 'bower_components/jquery/dist/',
            src: 'jquery.min.js',
            dest: 'js/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            cwd: 'bower_components/font-awesome/scss/',
            src: '**',
            dest: '_sass/font-awesome/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            cwd: 'bower_components/font-awesome/fonts/',
            src: '**',
            dest: 'css/fonts',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            cwd: 'bower_components/bootstrap/dist/css/',
            src: '*.min.css',
            dest: 'css/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            cwd: 'bower_components/bootstrap/dist/js/',
            src: '*.min.js',
            dest: 'js/',
            filter: 'isFile'
          }
        ]
      }
    },
    imagemin: {                          // Task
      png: {                         // Another target
        options: {
          optimizationLevel: 5
        },
        files: [{
          expand: true,
          cwd: '_images/',
          src: ['**/*.png'],
          dest: 'img/',
          ext: '.png'
        }]
      },
      jpg: {                         // Another target
        options: {
          optimizationLevel: 5,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '_images/',
          src: ['**/*.{jpg,jpeg}'],
          dest: 'img/',
          ext: '.jpg'
        }]
      },
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'imagemin']);
};
