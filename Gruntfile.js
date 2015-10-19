module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: 'node_modules/basscss/css/',
            src: 'basscss.min.css',
            dest: 'css/',
            filter: 'isFile'
          }
        ]
      }
    },
    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,
          cwd: '_images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/images/'
        }]
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'imagemin']);
};
