// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
contract Marriage {
    function createMarriage(address partner1, address partner2) public pure returns (string memory) {
        require(partner1 != partner2, "Non valide");
        return "Felicitations";
    }
    
    function divorce() public pure returns (string memory) {
        return "Divorce accorde";
    }
}

