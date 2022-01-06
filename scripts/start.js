'use strict';

const prompt = require('prompt');
const colors = require('colors');
prompt.message = '';


async function start() {
  prompt.start();
  const task = await prompt.get([{
    name: 'task',
    description: colors.red(
      `Which task do you like to perform?
    1. Upload NFT image to IPFS
    2. Upload NFT Meta data to IPFS
    3. Deploy Contract
    4. Mint NFT
Please enter the task number:`
    ),
    required: true
  }]);

  switch (task) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    default:
      // Bug

  }

  console.log(task);
}

start();
//
// if (!privateKey) {
//   privateKey = await prompt.get([{
//     name: 'privateKey',
//     description: colors.red('Please enter your private key'),
//     required: true
//   }]);
// }
//
// let providerUrl = process.env.PROVIDER_URL;
//
// if (!providerUrl) {
//   providerUrl = await prompt.get([{
//     name: 'providerUrl',
//     description: colors.red('Please enter a blockchain gateway provider url'),
//     required: true
//   }]);
// }
//
// let contractAddress = process.env.CONTRACT_ADDRESS;
//
// if (!contractAddress) {
//   contractAddress = await prompt.get([{
//     name: 'providerUrl',
//     description: colors.red('Please enter your contract address'),
//     required: true
//   }]);
// }
