'use strict';
const fs = require('fs');
const path = require('path');

const colors = require('colors');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

async function mintNFT(privateKey, providerUrl, contractAddress, contractName, mintFunctionName) {

  const provider = new HDWalletProvider(privateKey, providerUrl);
  const web3 = new Web3(provider);

  const smartContractAbiPath = path.join(__dirname, '..', '..', 'artifacts', 'contracts', `${contractName}.sol`, `${contractName}.json`);
  const jsonInterface = JSON.parse(fs.readFileSync(smartContractAbiPath, 'utf-8'));

  const accounts = await web3.eth.getAccounts();

  const contract = new web3.eth.Contract(jsonInterface.abi, contractAddress);

  const result = await contract.methods[mintFunctionName](accounts[0], 'Url to JSON Meta Data').send({
    from: accounts[0]
  });

  console.info(colors.rainbow('##################'));
  console.info(colors.cyan.bold('Result'), colors.cyan(result));
  console.info(colors.rainbow('##################'));

}

module.exports = mintNFT;
