/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /* Change these */
            width: 3200,
            suffix: '_large_2x',
            quality: 30
          },{
            width: 2400,
            suffix: '_medium_2x',
            quality: 30
          },{
            width: 1600,
            suffix: '_small_2x',
            quality: 30
          },{
            width: 800,
            suffix: '_xsmall_2x',
            quality: 30
          },{
            width: 1600,
            suffix: '_large_1x',
            quality: 30
          },{
            width: 1200,
            suffix: '_medium_1x',
            quality: 30
          },{
            width: 800,
            suffix: '_small_1x',
            quality: 30
          },{
            width: 400,
            suffix: '_xsmall_1x',
            quality: 30
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'Images_src/',
          dest: 'Images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['Images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['Images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
