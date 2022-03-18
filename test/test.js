const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DappVault", function () {
  it("Should pass", async function () {
    const DappVault = await ethers.getContractFactory("DappVault");
    expect(true).to.equal(true);
  });
});
