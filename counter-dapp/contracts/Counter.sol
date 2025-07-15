// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public count;
    string public ownerName;

    constructor(string memory _ownerName) {
        count = 0;
        ownerName = _ownerName;
    }

    function increment() public {
        count += 1;
    }

    function decrement() public {
        if (count > 0) {
            count -= 1;
        }
    }

    function reset() public {
        count = 0; // Zera o contador
    }

    function getCount() public view returns (uint256) {
        return count;
    }

    function getOwnerName() public view returns (string memory) {
        return ownerName;
    }
}