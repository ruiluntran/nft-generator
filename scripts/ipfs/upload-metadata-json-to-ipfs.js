'use strict';
const IPFS = require('ipfs-core');
const colors = require('colors');

async function uploadMetaData(name, imageCIDPath, description, attributes) {

  if (!name || name.length === 0) {
    console.error(colors.red('Missing NFT Name'));
    return;
  }

  if (!imageCID || imageCID.length === 0) {
    console.error(colors.red('Missing NFT Image CID'));
    return;
  }

  if (!description || description.length === 0) {
    console.error(colors.red('Missing NFT Description'));
    return;
  }

  if (attributes && !Array.isArray(attributes)) {
    console.error(colors.red('Missing NFT Attributes should be an array'));
    return;
  }

  const ipfs = await IPFS.create();
  const {cid} = await ipfs.add(JSON.stringify({
    description,
    image: 'ipfs://' + imageCIDPath,
    name,
    attributes: attributes ? attributes : [],
  }));

  console.info(colors.rainbow('##################'));
  console.info(colors.cyan.bold('CID'), colors.cyan(cid.toString()));
  console.info(colors.cyan.bold('Url'), colors.cyan('https://ipfs.io/ipfs/' + cid.toString()));
  console.info(colors.rainbow('##################'));

}

module.exports = uploadMetaData;
