'use strict';

/**
 * @module woff
 * @namespace
 */
function woff() {}

/**
 * Convert TTF data to WOFF.
 *
 * @static
 *
 * @example
 * var woff = require('woff');
 * var input = fs.readFileSync('something.ttf');
 * var output = 'output.woff';
 * fs.writeFileSync(output, woff.encode(input));
 *
 * @param {Buffer} data TTF font data to be encoded.
 * @returns {Buffer} Encoded WOFF data.
 */
woff.encode = require('bindings')('woff_encode.node').encode;

module.exports = woff;
