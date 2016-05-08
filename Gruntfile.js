'use strict';

const template = `# node-sfnt2woff-zopfli

This is just a Node.js wrapper around
[bramstein's](https://github.com/bramstein)
 [sfnt2woff-zopfli](https://github.com/bramstein/sfnt2woff-zopfli) utility.

In respect for his work this wrapper is also MPL/GPL/LGPL licensed, but note
that the Zopfli implementation is licensed under the Apache License.

## API Reference

{{>all-docs~}}`;

module.exports = (grunt) => {
  grunt.initConfig({
    clean: ['./README.md'],
    eslint: {
      target: [
        './src/**/*.js',
        './test/**/*.js'
      ]
    },
    jsdoc2md: {
      withOptions: {
        options: {
          template
        },
        src: 'src/*.js',
        dest: './README.md'
      }
    },
  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
  grunt.registerTask('default', [
    'eslint',
    'clean',
    'jsdoc2md'
  ]);
};
