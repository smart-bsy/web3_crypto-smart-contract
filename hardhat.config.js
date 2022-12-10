require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();

const GOERLI_PROVIDER_URL = process.env.GOERLI_PROVIDER_URL;
const TEST_ACCOUNT_PRIVATE_KEY = process.env.TEST_ACCOUNT_PRIVATE_KEY;
const GOERLI_CONTRACT_VERIFY_API_KEY =
  process.env.GOERLI_CONTRACT_VERIFY_API_KEY;
const POLYGON_CONTRACT_VERIFY_API_KEY =
  process.env.POLYGON_CONTRACT_VERIFY_API_KEY;
const POLYGON_PROVIDER_URL = process.env.POLYGON_PROVIDER_URL;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    mumbai: {
      // poly
      url: POLYGON_PROVIDER_URL,
      accounts: [TEST_ACCOUNT_PRIVATE_KEY],
      chainId: 80001,
    },
    goerli: {
      url: GOERLI_PROVIDER_URL,
      accounts: [TEST_ACCOUNT_PRIVATE_KEY],
      chainId: 5,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      // chainId:accountIndex
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
      5: 0,
    },
  },
  mocha: {
    timeout: 500000,
  },
  etherscan: {
    apiKey: {
      goerli: GOERLI_CONTRACT_VERIFY_API_KEY, // verify smart contract
      polygonMumbai: POLYGON_CONTRACT_VERIFY_API_KEY,
    },
  },
};
