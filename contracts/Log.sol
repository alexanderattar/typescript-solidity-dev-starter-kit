pragma solidity ^0.7.6;

import "hardhat/console.sol";

contract Log {
    function getHash() public view returns (address) {
        address h = address(bytes20(uint160(uint256(keccak256('hevm cheat code')))));
        return h;
    }
}
