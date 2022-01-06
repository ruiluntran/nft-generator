require('@nomiclabs/hardhat-waffle');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: 'matic_testnet',
  networks: {
    hardhat: {},
    matic_testnet: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [],
      gasPrice: 8000000000
    },
    matic: {
      url: '',
      accounts: [],
      gasPrice: 'auto'
    },
    ethereum: {
      url: '',
      accounts: [],
      gasPrice: 'auto'
    },
    binanceSmartChain: {
      url: 'https://bsc-dataseed.binance.org',
      accounts: [],
      gasPrice: 'auto'
    },
    localhost: {
      url: 'localhost:8545',
      accounts: [],
      gasPrice: 'auto'
    }
  },
};
