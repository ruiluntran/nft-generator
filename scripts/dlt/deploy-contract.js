const hre = require('hardhat');
const colors = require('colors');

async function deployContract(contractName) {
  const Nft = await hre.ethers.getContractFactory(contractName);
  const nft = await Nft.deploy();
  await nft.deployed();

  console.info(colors.rainbow('##################'));
  console.info(colors.cyan.bold('NFT deployed to:'), colors.cyan(nft.address));
  console.info(colors.rainbow('##################'));

}

module.exports = deployContract;
