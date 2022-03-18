require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

module.exports = {
  networks: {
    // BINANCE SMART CHAIN TESTNET
    bsc_test: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      accounts: [process.env.PRIVATE_KEY],
    },

    // BINANCE SMART CHAIN MAINNET
    bsc_main: {
      url: "https://bsc-dataseed1.binance.org",
      accounts: [process.env.PRIVATE_KEY],
    },

    // ANY ETHERSCAN TESTNET AND MAINNET
    eth: {
      url: `https://${process.env.NETWORK_NAME}.infura.io/v3/${process.env.INFURA_ID}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
};
