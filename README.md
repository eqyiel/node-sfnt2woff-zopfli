# node-sfnt2woff-zopfli

This is just a Node.js wrapper around
[bramstein's](https://github.com/bramstein)
[sfnt2woff-zopfli](https://github.com/bramstein/sfnt2woff-zopfli) utility.

In respect for his work this wrapper is also MPL/GPL/LGPL licensed, but note
that the Zopfli implementation is licensed under the Apache License.

## Usage

If you're using `npm`:

```
npm install --save-dev sfnt2woff-zopfli
```

Alternatively you can clone this repo and run `npm install`. Be sure to get the
submodule dependency (use the `--recursive` flag when cloning). Note that you
can't install directly from this repo because `npm` doesn't understand
submodules.

## API Reference

<a name="woff"></a>

## woff : <code>object</code>

**Kind**: global namespace

- [woff](#woff) : <code>object</code>
  - [.decode](#woff.decode) ⇒ <code>Buffer</code>
  - [.encode](#woff.encode) ⇒ <code>Buffer</code>

<a name="woff.decode"></a>

### woff.decode ⇒ <code>Buffer</code>

Convert WOFF data to TTF.

**Kind**: static property of <code>[woff](#woff)</code>  
**Returns**: <code>Buffer</code> - Decoded TTF data.

| Param | Type                | Description                   |
| ----- | ------------------- | ----------------------------- |
| data  | <code>Buffer</code> | WOFF font data to be decoded. |

**Example**

```js
var woff = require('sfnt2woff-zopfli');
var input = fs.readFileSync('something.woff');
var output = 'output.ttf';
fs.writeFileSync(output, woff.decode(input));
```

<a name="woff.encode"></a>

### woff.encode ⇒ <code>Buffer</code>

Convert TTF data to WOFF.

**Kind**: static property of <code>[woff](#woff)</code>  
**Returns**: <code>Buffer</code> - Encoded WOFF data.

| Param | Type                | Description                  |
| ----- | ------------------- | ---------------------------- |
| data  | <code>Buffer</code> | TTF font data to be encoded. |

**Example**

```js
var woff = require('sfnt2woff-zopfli');
var input = fs.readFileSync('something.ttf');
var output = 'output.woff';
fs.writeFileSync(output, woff.encode(input));
```
