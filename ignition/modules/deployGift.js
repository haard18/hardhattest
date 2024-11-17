// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
// Import the buildModule function from Hardhat Ignition


module.exports = buildModule("GiftModule", (m) => {
  // Deploy the `gift` contract
  const gift = m.contract("gift", []);

  return { gift };
});

