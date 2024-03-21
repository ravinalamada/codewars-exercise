pragma solidity ^0.8.16;

//define a smart contract
contract CountByX {
    
    function countBy(int x, int n) public pure returns (int[] memory) {
        int[] memory z = new int[](uint(n)); // Initilize the z
       
      for (uint i = 0; i < uint(n); i++) { // loop through the n till it reaches the given number in the first arg and mulpitly them by x
            z[i] = x * int(i + 1);
        }
        return z; // return an arr of z
    }
}
