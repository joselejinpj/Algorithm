/*****

Given a column title as appear in an Excel sheet, return its corresponding column number.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: "A"
Output: 1

Test Case 2:

Input: "ZY"
Output: 701

*****/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var result = 0;
    
    for(var i=0; i<s.length; i++) 
        result = result * 26 + (s.charCodeAt(i) - 'A'.charCodeAt(0)) + 1;

    return result;    
};
 
