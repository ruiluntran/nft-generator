'use strict';
const IPFS = require('ipfs-core');
const fs = require('fs');
const path = require('path');
const colors = require('colors');


async function uploadImageToIPFS(fileName) {

  const file = fs.readFileSync(path.join(__dirname, '..', '..', 'assets', 'images', fileName));

  if (!file) {
    console.error(colors.red('File not found. Please check the file name and make sure to place your file in folder:'));
    console.error(colors.red.bold('/assets/images'));
    return;
  }

  const fileNameChunk = fileName.split('.');

  if (!['jpg', 'png', 'gif'].includes(fileNameChunk[fileNameChunk.length - 1])) {
    console.error(colors.red('Image type not supported'));
    return;
  }

  const ipfs = await IPFS.create();
  const {cid} = await ipfs.add({
    path: fileName, content: Buffer.from(file)
  }, {
    wrapWithDirectory: true
  });

  console.info(colors.rainbow('##################'));
  console.info(colors.cyan.bold('CID'), colors.cyan(cid.toString()));
  console.info(colors.cyan.bold('Url'), colors.cyan(cid.toString('https://ipfs.io/ipfs/' + cid + '/' + fileName)));
  console.info(colors.rainbow('##################'));
}

module.exports = uploadImageToIPFS;
