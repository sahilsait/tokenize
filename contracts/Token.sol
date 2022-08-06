//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract Token is ERC20 {
    uint8 decimals_;

    constructor(
        string memory name,
        string memory symbol,
        uint256 totalSupply,
        uint8 decimal
    ) ERC20(name, symbol) {
        _mint(msg.sender, totalSupply * 10**decimal);
        decimals_ = decimal;
    }

    function decimals() public view virtual override returns (uint8) {
        return decimals_;
    }
}
