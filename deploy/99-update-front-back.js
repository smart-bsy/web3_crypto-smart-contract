const { ethers, network } = require("hardhat");

const fs = require("fs");

require("dotenv").config();

const UPDATE_FRONT_END = process.env.UPDATE_FRONT_END;
const FRONT_END_TRANSACTIONS_ABI =
  "../frontbackend/src/constants/transactions-abi.json";
const FRONT_END_TRANSACTIONS_ADDRESS =
  "../frontbackend/src/constants/transactions-address.json";

module.exports = async ({ deployments, getNamedAccounts }) => {
  const transactions = await ethers.getContract("Transactions");
  const chainId = network.config.chainId;
  if (UPDATE_FRONT_END) {
    const transactionAddress = JSON.parse(
      fs.readFileSync(FRONT_END_TRANSACTIONS_ADDRESS, "utf8")
    );
    transactionAddress[chainId] = transactions.address;
    fs.writeFileSync(
      FRONT_END_TRANSACTIONS_ADDRESS,
      JSON.stringify(transactionAddress)
    );
    fs.writeFileSync(
      FRONT_END_TRANSACTIONS_ABI,
      transactions.interface.format(ethers.utils.FormatTypes.json)
    );
  }
};

module.exports.tags = ["all", "update"];
