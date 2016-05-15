'use strict';

const template = `# node-sfnt2woff-zopfli

This is just a Node.js wrapper around
[bramstein's](https://github.com/bramstein)
 [sfnt2woff-zopfli](https://github.com/bramstein/sfnt2woff-zopfli) utility.

In respect for his work this wrapper is also MPL/GPL/LGPL licensed, but note
that the Zopfli implementation is licensed under the Apache License.

## Usage

If you're using \`npm\`:

\`\`\`
npm install --save-dev sfnt2woff-zopfli
\`\`\`

Alternatively you can clone this repo and run \`npm install\`.  Be sure to get
the submodule dependency (use the \`--recursive\` flag when cloning).  Note that
you can't install directly from this repo because \`npm\` doesn't understand
submodules.

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
