require("@nomicfoundation/hardhat-toolbox");

const SEPOLIA_TESTNET_PRIVATE_KEY = '';
const ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY = '';
const ARBITRUM_MAINNET_TEMPORARY_API_KEY = '';

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    arbitrumSepolia: {
      url: 'https://sepolia-rollup.arbitrum.io/rpc',
      chainId: 421614,
      accounts: [SEPOLIA_TESTNET_PRIVATE_KEY]
    },
    arbitrumOne: {
      url: 'https://arb1.arbitrum.io/rpc',
      accounts: [ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: {
      arbitrumOne: ARBITRUM_MAINNET_TEMPORARY_API_KEY
    }
  },
};
