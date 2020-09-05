/*****

Given a string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: "abab"
Output: True
Explanation: It is the substring "ab" twice.

Test Case 2:

Input: "abcabcabcabc"
Output: True
Explanation: It is the substring "abc" four times.


Test Case 3:

Input: "aba"
Output: False

*****/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var len = s.length;
    
    for(var i= Math.trunc(len/2); i>=1; i--) {
        if(len%i == 0) {
            var numOfRepeats = len/i;
            var pattern = s.substring(0,i);
            var buff = "";
            
            for(var j=0; j<numOfRepeats; j++)
                buff = buff + pattern;
            
            if(s==buff)
                return true;
        }
    }
    
    return false;
};
