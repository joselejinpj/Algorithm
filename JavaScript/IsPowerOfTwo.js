/*****

Given an integer, write a function to determine if it is a power of two.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 1
Output: true 
Explanation: 2 pow 0 = 1

Test Case 2:

Input: 16
Output: true
Explanation: 2 pow 4 = 16

*****/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n>0 && (n&n-1)==0; // n and n-1 must have no 1s in common
};
 
