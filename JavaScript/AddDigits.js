/*****

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
Do it without any loop/recursion in O(1) runtime.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.
             
*****/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num == 0) 
        return 0;

    if (num % 9 == 0) 
        return 9;

    return num % 9;    
};
 
