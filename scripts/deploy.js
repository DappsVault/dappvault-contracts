const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const DappVault = await hre.ethers.getContractFactory("DappVault");
  const dappVault = await DappVault.deploy();

  await dappVault.deployed();

  console.log("DappVault deployed to:", dappVault.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
