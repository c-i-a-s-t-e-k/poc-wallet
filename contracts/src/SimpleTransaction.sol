pragma solidity ^0.8.23;

contract SimpleTransaction {

    function transferEther(address payable recipient, uint256 amount) public payable{
        require(amount <= address(this).balance, "Insufficient balance");
        recipient.transfer(amount);
    }
}