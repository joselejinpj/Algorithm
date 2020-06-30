/*****

Given a string containing just the characters '(' and ')', find the length of the longest valid parentheses substring.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"

Test Case 2:

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"

*****/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var stack = [];
    var longestValid = 0;
    
    stack.push(-1);
    
    for(var i=0; i<s.length; i++) {
        var currentChar = s.charAt(i);
        
        if(currentChar == "(")
            stack.push(i)
        else {
            stack.pop();
            
            if(stack.length == 0) 
                stack.push(i)
            else
                longestValid = Math.max(longestValid, i-stack[stack.length-1]);
        }
    }
    
    return longestValid;
};
 
