/**
 * @module woff
 * @namespace
 */
function woff() {}

const { decode } = require('bindings')('woff_decode.node');
const { encode } = require('bindings')('woff_encode.node');

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
woff.decode = decode;

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
 * @param {number} [iterations=15] Number of zopfli iterations.
 * @returns {Buffer} Encoded WOFF data.
 */
woff.encode = (data, iterations = 15) => encode(data, iterations);

module.exports = woff;
