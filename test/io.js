

const basePath = './node_modules/font-awesome/fonts';
const fs = require('fs');
const path = require('path');
const temp = require('temp').track();
const test = require('tap').test;
const woff = require('../src/woff.js');

const magic = {
  // http://www.garykessler.net/library/file_sigs.html
  ttf: [0x00, 0x01, 0x00, 0x00],
  // "wOFF", see https://www.w3.org/TR/WOFF/#WOFFHeader
  woff: [0x77, 0x4f, 0x46, 0x46]
};


test('Decode WOFF data.', (t) => {
  temp.mkdir('node-sfnt2woff-zopfli', (err, dirPath) => {
    if (err) throw err;
    const data = fs.readFileSync(path.join(basePath, 'fontawesome-webfont.woff'));
    const file = path.join(dirPath, 'decoded.ttf');
    // eslint-disable-next-line no-shadow
    fs.writeFile(file, woff.decode(data), (err) => {
      if (err) throw err;
      const buffer = new Buffer(4);
      // eslint-disable-next-line no-shadow
      fs.open(file, 'r', (err, fd) => { // eslint-disable-next-line no-shadow
        fs.read(fd, buffer, 0, 4, 0, (err, bytesRead, buffer) => {
          fs.close(fd, (err) => { // eslint-disable-line no-shadow
            if (err) throw err;
            t.ok(buffer.equals(new Buffer(magic.ttf)));
            t.end();
          });
        });
      });
    });
  });
});

test('Encode WOFF data.', (t) => {
  temp.mkdir('node-sfnt2woff-zopfli', (err, dirPath) => {
    if (err) throw err;
    const data = fs.readFileSync(path.join(basePath, 'fontawesome-webfont.ttf'));
    const file = path.join(dirPath, 'encoded.woff');
    // eslint-disable-next-line no-shadow
    fs.writeFile(file, woff.encode(data), (err) => {
      if (err) throw err;
      const buffer = new Buffer(4);
      // eslint-disable-next-line no-shadow
      fs.open(file, 'r', (err, fd) => { // eslint-disable-next-line no-shadow
        fs.read(fd, buffer, 0, 4, 0, (err, bytesRead, buffer) => {
          fs.close(fd, (err) => { // eslint-disable-line no-shadow
            if (err) throw err;
            t.ok(buffer.equals(new Buffer(magic.woff)));
            t.end();
          });
        });
      });
    });
  });
});
