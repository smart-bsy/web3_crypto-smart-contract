const { network } = require("hardhat");
const { deploymentChains } = require("../hardhat-helper-config");

module.exports = async ({ deployments, getNamedAccounts }) => {
  const { deployer } = await getNamedAccounts();
  const { log, deploy } = deployments;
  const transactions = await deploy("Transactions", {
    from: deployer,
    log: true,
    args: [],
  });
  if (!deploymentChains.includes(network.name)) {
    try {
      await run("verify:verify", {
        address: transactions.address,
        constructorArguments: [],
      });
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports.tags = ["all", "transactions"];
