const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token", function () {
  it("Should return tokenomics of the deployed ERC-20", async function () {
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy("Token", "TKN", 100, 0);
    await token.deployed();
    expect(await token.name()).to.equal("Token");
    expect(await token.symbol()).to.equal("TKN");
    expect(await token.totalSupply()).to.equal(100);
    expect(await token.decimals()).to.equal(0);
  });
});
