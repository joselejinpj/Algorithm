/*****

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance. Note: 0 ≤ x, y < 231.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.

*****/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var xor = x^y;
    var binStr = xor.toString(2).split("").sort().join(""); // Count 1s
    
    return binStr=="0"? 0: binStr.slice(binStr.indexOf("1")).length;
};
 
