'use strict';

/**
 * @module woff
 * @namespace
 */
function woff() {}

/**
 * Convert WOFF data to TTF.
 *
 * @static
 *
 * @example
 * var woff = require('sfnt2woff-zopfli');
 * var input = fs.readFileSync('something.woff');
 * var output = 'output.ttf';
 * fs.writeFileSync(output, woff.decode(input));
 *
 * @param {Buffer} data WOFF font data to be decoded.
 * @returns {Buffer} Decoded TTF data.
 */
woff.decode = require('bindings')('woff_decode.node').decode;

/**
 * Convert TTF data to WOFF.
 *
 * @static
 *
 * @example
 * var woff = require('sfnt2woff-zopfli');
 * var input = fs.readFileSync('something.ttf');
 * var output = 'output.woff';
 * fs.writeFileSync(output, woff.encode(input));
 *
 * @param {Buffer} data TTF font data to be encoded.
 * @returns {Buffer} Encoded WOFF data.
 */
woff.encode = require('bindings')('woff_encode.node').encode;

module.exports = woff;
